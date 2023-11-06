export interface MediaStatsProps {
    count: number;
    meanScore: number;
    minutesWatched?: number;
    episodesWatched?: number;
    chaptersRead?: number;
    volumensRead?: number;
}

export interface UserStatsProps {
    anime: MediaStatsProps;
    manga: MediaStatsProps;
}