class Music {
    constructor(title,singer,img,file){
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

getName(){
    return this.title + ' - ' + this.singer;
}

}
const musicList = [
    new Music('Geççek','Tarkan','1.jpeg','1.mp3'),
    new Music('Bu da Geçer Mi Sevgilim','Yalın','2.jpeg','2.mp3'),
    new Music('Aramızda Uçurumlar','Suat Suna','3.jpeg','3.mp3'),
    new Music('Boşver','Nilüfer','4.jpeg','4.mp3'),
    new Music('Bilmem mi?','Sefo','5.jpeg','5.mp3'),
];