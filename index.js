class Message {
    constructor(text = '', created = Date.now()) {
        this.text = text;
        this._created = created;
    }

    get created() {
        return this._created;
    }

    set created(newCreated) {
        this._created = newCreated;
    }

    toString() {
        return `Message created at ${this.created} - Text ${this.text}`;
    }
}

class ImageMessage extends Message {
    constructor(text = '', created = Date.now(), url = '', thumbnail = '') {
        super(text, created);
        this.url = url;
        this.thumbnail = thumbnail;
    }

    toString() {
        return `Photo${super.toString()}` +
                ` - Url ${this.url}` +
                ` - Thumbnail ${this.thumbnail}`;
    }
}

let text = 'Simple message';
let created = Date.now();
let duckTypeMessage = {
    text,
    created
};

let emptyMessage = new Message();
let textMessage = new Message('Yesterday Message', Date.now() - 86400);
let photoMessage = new ImageMessage();

console.log(String(emptyMessage));
console.log(String(textMessage));
console.log(String(photoMessage));
console.log(duckTypeMessage);

console.log(emptyMessage instanceof Message);
console.log(textMessage instanceof Message);
console.log(photoMessage instanceof Message);
console.log(photoMessage instanceof ImageMessage);
console.log(emptyMessage instanceof ImageMessage);
console.log(textMessage instanceof ImageMessage);
