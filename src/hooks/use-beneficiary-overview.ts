import { JsonRpcProvider } from '@ethersproject/providers';
import { Contract } from 'ethers';
import { VESTING_SCHEDULE_ADDRESS } from '../constants/blockchain';
import { vestingScheduleAbi } from '../abis/vestingSchedule';
import { IBeneficiaryOverview } from '../interfaces/beneficiaryOverview.interface';

export const useBeneficiaryOverview = () => {
    const getBeneficiaryOverview = async (
        provider: JsonRpcProvider,
        account: string,
    ): Promise<IBeneficiaryOverview[]> => {
        const vestingScheduleContract = new Contract(
            VESTING_SCHEDULE_ADDRESS,
            vestingScheduleAbi,
            provider,
        );
        return await vestingScheduleContract.callStatic.getBeneficiaryOverview(
            account,
        );
    };

    return {
        getBeneficiaryOverview,
    };
};
