import { FC } from 'react';


interface PreloaderProps {
  isLoading: boolean;
}

export const Preloader: FC<PreloaderProps> = ({ isLoading }) => {
  return isLoading ? (
    <div className="preloaderContainer">
      <div className="spinner"></div>
    </div>
  ) : null;
};

