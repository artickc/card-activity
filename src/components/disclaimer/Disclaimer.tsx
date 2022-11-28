import { GradientButton } from '../button/gradient/GradientButton';
import mainPage from '../../assets/icons/main-page.png';
import styled from 'styled-components';

type Props = {
    onAcceptClick: () => void;
};

export const Disclaimer = ({ onAcceptClick }: Props) => {
    return (
        <div className="w-full h-[100vh]">
            <div className="w-full h-full z-40 fixed flex items-center justify-center">
                <div className="w-[30rem] h-[30rem] flex justify-between p-8 bg-black-700 rounded-[20px] inset-shadow overflow-auto">
                    <div className="w-full flex flex-col items-center">
                        <span className="text-3xl color-gray-gradient text-center mt-2 mb-4 tracking-[.1em] font-medium font-kanit-medium">
                            DISCLAIMER
                        </span>
                        <span className="text-xl tracking-[.05em] font-medium font-kanit-medium text-start overflow-auto">
                            Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla
                            Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla
                            Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla
                            Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla
                            Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla
                            Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla
                            Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla
                            Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla
                            Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla
                            Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla
                            Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla
                            Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla
                            Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla
                            Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla
                            Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla
                            Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla
                            Bla Bla Bla Bla Bla Bla Bla Bla
                        </span>
                        <div className="pt-6">
                            <GradientButton
                                size="small"
                                disabled={false}
                                text={'ACCEPT'}
                                onClick={onAcceptClick}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <BackgroundImage className="w-full h-full flex justify-center items-center m-auto blur-[3px] opacity-40" />
        </div>
    );
};

const BackgroundImage = styled.div`
    background-image: url(${mainPage});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #1e1e1e;
`;
