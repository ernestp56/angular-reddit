export default class PostItemInterface {

    score: number;
    author: string;
    subreddit: string;
    title: string;
    selftext: string;
    thumbnail: string;
    created: number;
    numComments: number;
    link: string;

    constructor(score: number, author: string, subreddit: string, title:
      string,   selftext: string, thumbnail: string, created: number, numComments: number, link: string) {

      this.score = score;
      this.author = author;
      this.subreddit = subreddit;
      this.title = title;
      this.selftext = selftext;
      this.thumbnail = thumbnail;
      this.created = created;
      this.numComments = numComments;
      this.link = link;
    }
}
