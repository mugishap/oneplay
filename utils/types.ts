export interface Curr {
    file: File,
    url: string
}

export interface PlayerContextData {
    playerState: IPlayerState,
    setPlayerState: React.Dispatch<IPlayerState>,
    currentPlaying: Curr,
    setCurrentPlaying: React.Dispatch<Curr>,
    files: File[];
    setFiles: React.Dispatch<File[]>,
    handleNext: () => void,
    handlePrev: () => void,
}

export interface IPlayerState {
    isPlaying: boolean,
    progress: number,
    speed: number,
    isMuted: boolean,
    isFullScreen: boolean,
    isPicInPic: boolean,
    volume: number,
}