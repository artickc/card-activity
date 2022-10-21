import { IBeneficiaryOverview } from '../interfaces/beneficiaryOverview.interface';
import { IVestingSchedule } from '../interfaces/vestingSchedule.interface';
import {
    getDurationLeft,
    getDurationProgress,
    isVestingScheduleUnlocked,
} from './getDuration';
import { getTermsAsString } from './getTermsAsString';
import { getUnlockedAmount } from './getUnlockedAmount';
import { parseBigNumber } from './parseBigNumber';

export const formatVestingScheduleData = (
    beneficiaryOverview: IBeneficiaryOverview,
): IVestingSchedule => {
    const { name } = beneficiaryOverview;
    const terms = parseBigNumber(beneficiaryOverview.terms, 0);
    const cliff = parseBigNumber(beneficiaryOverview.cliff, 0);
    const duration = parseBigNumber(beneficiaryOverview.duration, 0);
    const allocatedAmount = parseBigNumber(
        beneficiaryOverview.allocatedAmount,
        0,
    );
    const vestingRate = (allocatedAmount * terms) / duration;
    const isUnlocked = isVestingScheduleUnlocked(cliff, duration);
    return {
        name,
        terms,
        cliff,
        duration,
        durationLeft: isUnlocked ? 0 : getDurationLeft(cliff, duration),
        durationProgress: isUnlocked
            ? 100
            : getDurationProgress(cliff, duration),
        vestingRate,
        vestingRateAsString: isUnlocked
            ? 'FULLY VESTED'
            : `${vestingRate} $LAKE / ${getTermsAsString(terms)}`,
        unlockedAmount: isUnlocked
            ? allocatedAmount
            : getUnlockedAmount(cliff, terms, vestingRate),
        isUnlocked,
        allocatedAmount,
        withdrawnAmount: parseBigNumber(beneficiaryOverview.withdrawnAmount, 0),
    };
};
