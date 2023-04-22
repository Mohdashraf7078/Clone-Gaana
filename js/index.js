const section = document.querySelector('.section')
let currentSongsObj = {};
const audioplayer = document.getElementById('audio_player')
const msplay = document.getElementById('ms-play')
const Range = document.getElementById('p-range')
const nlrange = document.getElementById('nl-range')
const gfutt = document.querySelectorAll('.g-futt')
let counter = 1;
let index = 0;
const simg = document.querySelectorAll('.s-img')
const backward = document.querySelector('#backward')
const lsforward = document.querySelector('#ls-forward')
const lsbackward = document.querySelector('#ls-backward')
const forward = document.querySelector('#forward')
const humbargur = document.querySelector('#humbargur')
const Hcut = document.querySelector('#h-cut')
const upArrow = document.querySelector('#upArrow')
const hideArrow = document.querySelector('#hideArrow')
const lsplay = document.querySelector('#ls-play')
const nrlower = document.querySelector('.nr-lower')

const datata = [1, 2, 3, 4, 5, 6]

humbargur.addEventListener('click', () => {
    document.querySelector('.h-leftBar').style.left = 0;
})

Hcut.addEventListener('click', () => {
    document.querySelector('.h-leftBar').style.left = `-23rem`;
})
const getdata = async () => {
    const response = await fetch('./js/songs.json');
    // console.log(response);
    const data = await response.json()
    showdata(data.CardBox);
    // console.log(data.CardBox);
    currentSongsObj = data.CardBox[4].songscards;
    // console.log(currentSongsObj)
    createHidedData(currentSongsObj)
    // console.log(currentSongsObj)
    // shuffleCards(datata)
}

const showdata = (data) => {
    data.forEach((element, index) => {
        // const card = shuffleCards(element.songscards)
        const charlist = document.createElement('div')
        charlist.classList.add('charlist')
        charlist.innerHTML = `
        <div class="g-head">
            <h2 class="listName">${element.Songsbox}</h2>
            <a class="s-r" href="#">See All</a>
        </div>
        <div class="g-fut">
            ${(element.songscards).map(songobj => showbox(songobj)).join('')}
        </div>
        `
        // charlist.querySelectorAll('.g-futt').forEach((element, index) => {
        //     element.style.left = `${index * 23.5}%`
        // })
        section.appendChild(charlist)
        // console.log(element.songscards)
    });
}


const showbox = (data) => {
    // console.log(data)
    return `
    <div class="g-futt" onclick="playsong(this)" data-songobj = '${JSON.stringify(data)}'>
        <div class="g-box">
            <img src="${data.image_source}" alt="">
            <span class="play-icon"><i class="p-play fa-solid fa-play"></i></span>
        </div>
        <div class="g-daital">
            <h3 class="g-name">${data.song_name}</h3>
            <p>${data.singer_name}</p>
        </div>
    </div>
    `
}

const playsong = (songcardobj) => {
    console.log(songcardobj)
    const songobj = JSON.parse(songcardobj.dataset.songobj)
    // console.log(songobj)
    currentsong(songobj)
    // console.log(songobj)
    document.getElementById('p-phutter').classList.remove('hiddin');
}

const currentsong = (songobj) => {
    // currentSongsObj.push(songobj)
    // console.log(currentSongsObj)
    audioplayer.src = songobj.quality.low;
    audioplayer.pause();
    audioplayer.play();
    document.getElementById('m-play').classList.remove('fa-play');
    document.getElementById('m-play').classList.add('fa-pause');
    document.getElementById('pl-im').innerHTML = `<img src="${songobj.image_source}" alt="">`;
    document.getElementById('pl-h').innerHTML = songobj.song_name;
    document.getElementById('pl-p').innerHTML = songobj.singer_name;
    document.querySelector('.nl-img').innerHTML = `<img src="${songobj.image_source}" alt="">`;
    document.querySelector('.nl-songsName').innerHTML = songobj.song_name;
    document.querySelector('.nl-songsName').nextElementSibling.innerHTML = songobj.singer_name;
    document.querySelector('#l-play').classList.remove('fa-play');
    document.querySelector('#l-play').classList.add('fa-pause');
}



const createHidedData = (AllCurrentSongs) => {
    // console.log(AllCurrentSongs)
    AllCurrentSongs.forEach((CurrentSong) => {
        const nrItem = document.createElement('div')
        nrItem.classList.add('nr-items')
        nrItem.innerHTML = `
        <div class="nr-oneitem" onclick="PlayHideSong(this)" data-hidesongobj = '${JSON.stringify(CurrentSong)}'>
            <div class="left-item">
                <div class="item-img">
                    <img src="${CurrentSong.image_source}" alt="">
                </div>
                <div class="nr-fontBox">
                    <h2 class="left-songsName">${CurrentSong.song_name}</h2>
                    <p class="left-para">${CurrentSong.singer_name}</p>
                </div>
            </div>
            <span>00:00</span>
        </div>
        <hr class="hra">
        `
        nrlower.appendChild(nrItem)
    })
}

const PlayHideSong = (Hide0bj) => {
    console.log(Hide0bj)
    const songobj = JSON.parse(Hide0bj.dataset.hidesongobj)
    console.log(songobj)
    currentsong(songobj)
}

// const shuffleCards = (arr) => {
//     // console.log(arr)
//     for (let i = 0; i <= arr.lengh - 1; i++) {
//         let j = Math.floor(Math.random() * arr.lengh);
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     }
//     console.log(arr)
//     return arr;
// }

msplay.addEventListener('click', () => {
    if (audioplayer.paused || audioplayer.currentTime <= 0) {
        audioplayer.play();
        document.getElementById('m-play').classList.remove('fa-play');
        document.getElementById('m-play').classList.add('fa-pause');
        document.querySelector('#l-play').classList.remove('fa-play');
        document.querySelector('#l-play').classList.add('fa-pause');
    }
    else {
        audioplayer.pause();
        document.getElementById('m-play').classList.remove('fa-pause');
        document.getElementById('m-play').classList.add('fa-play');
        document.querySelector('#l-play').classList.remove('fa-pause');
        document.querySelector('#l-play').classList.add('fa-play');
    }

})

lsplay.addEventListener('click', () => {
    if (audioplayer.paused || audioplayer.currentTime <= 0) {
        audioplayer.play();
        document.getElementById('m-play').classList.remove('fa-play');
        document.getElementById('m-play').classList.add('fa-pause');
        document.querySelector('#l-play').classList.remove('fa-play');
        document.querySelector('#l-play').classList.add('fa-pause');
    }
    else {
        audioplayer.pause();
        document.getElementById('m-play').classList.remove('fa-pause');
        document.getElementById('m-play').classList.add('fa-play');
        document.querySelector('#l-play').classList.remove('fa-pause');
        document.querySelector('#l-play').classList.add('fa-play');
    }
})

audioplayer.addEventListener('timeupdate', () => {
    Range.value = parseInt((audioplayer.currentTime / audioplayer.duration) * 100);
    nlrange.value = parseInt((audioplayer.currentTime / audioplayer.duration) * 100);
    // console.log(audioplayer.currentTime)
    let min = Math.floor(audioplayer.currentTime / 60)
    let sec = Math.floor(audioplayer.currentTime % 60)
    let min1 = Math.floor(audioplayer.duration / 60)
    let sec1 = Math.floor(audioplayer.duration % 60)
    // console.log(Range.value)
    if (sec < 10) {
        sec = `0${sec}`
    }
    if (sec1 < 10) {
        sec1 = `0${sec1}`
    }

    document.querySelector('#l-time').innerHTML = (`${min}:${sec}`)
    document.querySelector('#d-time').innerHTML = (`${min1}:${sec1}`)
    document.querySelector('#h-c-time').innerHTML = (`${min}:${sec}`)
    document.querySelector('#h-e-time').innerHTML = (`${min1}:${sec1}`)
})

Range.addEventListener('change', () => {
    audioplayer.currentTime = (Range.value * audioplayer.duration) / 100;
})

nlrange.addEventListener('change', () => {
    audioplayer.currentTime = (nlrange.value * audioplayer.duration) / 100;
})
// gfutt.forEach((element, index) => {
//     element.style.left = `${index * 100}%`
// })

// backward songs

backward.addEventListener('click', () => {
    if (index < 1) {
        index = 9;
        changsongs();
    }
    else {
        index--;
        changsongs();
    }
})

lsbackward.addEventListener('click', () => {
    if (index < 1) {
        index = 9;
        changsongs();
    }
    else {
        index--;
        changsongs();
    }
})

// forward songs

forward.addEventListener('click', () => {
    if (index > 8) {
        index = 0;
        changsongs();
    }
    else {
        index++;
        changsongs()
    }
})

lsforward.addEventListener('click', () => {
    if (index > 8) {
        index = 0;
        changsongs();
    }
    else {
        index++;
        changsongs()
    }
})

// change songs
const changsongs = () => {
    currentsong(currentSongsObj[index])
    console.log(currentSongsObj[index])
}

// top image swap
simg.forEach((element, index) => {
    element.style.left = `${index * 52}%`
})

const slidePrev = () => {
    if (counter < 1) {
        counter = 3;
        slideRow()
    }
    else {
        counter--;
        slideRow()
    }
}

const slideNext = () => {
    if (counter > 4) {
        counter = 0;
        slideRow()
    }
    else {
        counter++;
        slideRow()
    }
}
const slideRow = () => {
    simg.forEach(element => {
        element.style.transform = `translateX(-${counter * 103}%)`
    })
    if (counter > 6) {
        counter = 0;
    }
    else {
        counter++;
    }
}

// up arrow

upArrow.addEventListener('click', () => {
    document.querySelector('header').classList.add('hiddin')
    document.querySelector('nav').classList.add('hiddin')
    document.querySelector('.section1').classList.add('hiddin')
    document.querySelector('.section').classList.add('hiddin')
    document.querySelector('#p-phutter').classList.add('hiddin')
    document.querySelector('.newSec').classList.remove('hiddin')
    document.querySelector('.futter').classList.add('hiddin')

})

// down arrow

hideArrow.addEventListener('click', () => {
    document.querySelector('.newSec').classList.add('hiddin')
    document.querySelector('header').classList.remove('hiddin')
    document.querySelector('nav').classList.remove('hiddin')
    document.querySelector('.section1').classList.remove('hiddin')
    document.querySelector('.section').classList.remove('hiddin')
    document.querySelector('#p-phutter').classList.remove('hiddin')
    document.querySelector('.futter').classList.remove('hiddin')
})
setInterval(() => {
    slideRow()
}, 2000)

getdata()
