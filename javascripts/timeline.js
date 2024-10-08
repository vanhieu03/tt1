const timeline = document.querySelector('.container-left-timeline');
const timelineChallenge = document.createElement('div');

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
    }
]

timelineContent.forEach(data =>{
    timelineChallenge.classList.add('.container-timeline-challenge');
})

timeline.appendChild(timelineChallenge);