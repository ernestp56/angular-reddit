export default class PostItemInterface {

    author: string;
    subreddit: string;
    title: string;
    selftext: string;
    created: number;
    numComments: number;

    constructor(author: string, subreddit: string, title: string, selftext: string, created: number, numComments: number) {

      this.author = author;
      this.subreddit = subreddit;
      this.title = title;
      this.selftext = selftext;
      this.created = created;
      this.numComments = numComments;
    }
}
