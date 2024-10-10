const timeline = document.querySelector('.container-left-timeline')
timeline.classList.add('container-left-timeline')
const timelineContent = [
    {
        time: "7/10/2024",
        number: "tt1",
        name: "Lập 01 website giới thiệu về bản thân (portfolio) và thông tin quá trình thực tập tại I&E Vietnam.",
        link: "https://hieunv.thuctap.inevn.com/web_cv/"
    },
    {
        time: "7/10/2024",
        number: "tt1",
        name: "Lập 01 website giới thiệu về bản thân (portfolio) và thông tin quá trình thực tập tại I&E Vietnam.",
        link: "https://hieunv.thuctap.inevn.com/web_cv/"
    },
    {
        time: "7/10/2024",
        number: "tt1",
        name: "Lập 01 website giới thiệu về bản thân (portfolio) và thông tin quá trình thực tập tại I&E Vietnam.",
        link: "https://hieunv.thuctap.inevn.com/web_cv/"
    },
    {
        time: "7/10/2024",
        number: "tt1",
        name: "Lập 01 website giới thiệu về bản thân (portfolio) và thông tin quá trình thực tập tại I&E Vietnam.",
        link: "https://hieunv.thuctap.inevn.com/web_cv/"
    },
    {
        time: "7/10/2024",
        number: "tt1",
        name: "Lập 01 website giới thiệu về bản thân (portfolio) và thông tin quá trình thực tập tại I&E Vietnam.",
        link: "https://hieunv.thuctap.inevn.com/web_cv/"
    },
    {
        time: "7/10/2024",
        number: "tt1",
        name: "Lập 01 website giới thiệu về bản thân (portfolio) và thông tin quá trình thực tập tại I&E Vietnam.",
        link: "https://hieunv.thuctap.inevn.com/web_cv/"
    }
    
]

timelineContent.forEach((data, index) =>{
    const timelineChallenge = document.createElement('div')
    timelineChallenge.classList.add('container-timeline-challenge')
    timelineChallenge.classList.add('col-2')

    const timelineChallengeWrapper = document.createElement('div')
    timelineChallengeWrapper.classList.add('container-challenge-wrapper')

    const challengLineLeft = document.createElement('div')
    if((index + 1) % 2 !== 0){
        challengLineLeft.classList.add('challenge-line-left')
    }
    else{
        challengLineLeft.classList.add('challenge-line-right')
    }
    timelineChallengeWrapper.innerHTML = `
        <div class="container-challenge-wrapper-number">${data.number}</div>
        <div class="container-challenge-wrapper-name">${data.name}</div>
        <div class="container-challenge-wrapper-link">
            <a href="${data.link}">Link thử thách</a>
            <div>${data.time}</div>
        </div>
    `
    timelineChallenge.appendChild(challengLineLeft)
    timelineChallenge.appendChild(timelineChallengeWrapper)
    timeline.appendChild(timelineChallenge)
})

