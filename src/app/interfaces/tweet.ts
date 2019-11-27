import { User } from './user';

export interface NewTweet {
    tweet: string;
    _parent?: Tweet;
}

export interface Tweet {
    created_at: string;
    _id: string;
    tweet: string;
    _author: User;
    _parent?: Tweet;
}
