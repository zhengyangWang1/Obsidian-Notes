const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    mini: true
    autoplay: true,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    audio: [
        {
            name: '兰亭序',
            artist: '周杰伦',
            url: 'https://www.ytmp3.cn/down/74278.mp3',
            cover: 'cover1.jpg',
        }，
       
    ]
});