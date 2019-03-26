export class Post {
    id: number;
    loveIts: number;
    createdAt: string;
    constructor(public title: string, public content: string) {
        this.createdAt = new Date().toDateString();
        this.loveIts = 0;
        this.id = +new Date().getUTCMilliseconds();
    }
}
