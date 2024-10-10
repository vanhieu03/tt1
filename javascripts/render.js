const timeline = document.querySelector('.container-left-timeline')
timeline.classList.add('container-left-timeline')
const timelineContent = [
    {
        time: "23/09/2024 – 5/10/2024",
        number: "Tuần đầu",
        name: "Viết lại giao diện từ file pdf.",
        link: "https://hieunv.thuctap.inevn.com/web_cv/"
    },
    {
        time: "7/10/2024 - Hiện tại",
        number: "TT1",
        name: "Lập 01 website giới thiệu về bản thân (portfolio) và thông tin quá trình thực tập tại I&E Vietnam.",
        link: "https://hieunv.thuctap.inevn.com/tt1/"
    },
    {
        time: "Tương lai",
        number: "TT2",
        name: "Sử dụng HTML, CSS, Javascript viết  minigame theo chủ đề bốc thăm.",
        link: ""
    },
    {
        time: "Tương lai",
        number: "TT3",
        name: "Được cung cấp và đào tạo quy chuẩn code, thư viện CSS của Công ty. Sử dụng quy chuẩn code được đào tạo để thiết kế 02 giao diện theo mẫu thiết kế được cung cấp.",
        link: ""
    },
    {
        time: "Tương lai",
        number: "TT4",
        name: "Sử dụng INEVO để thiết kế 01 website động lấy dữ liệu thực tế từ hệ thống nội bộ ra website, theo bản thiết kế đã được cung cấp.",
        link: ""
    },
    {
        time: "Tương lai",
        number: "TT5",
        name: "Ứng dụng INEVO triển khai tạo một website giới thiệu về lịch sử Việt Nam với giao diện tùy chọn sáng tạo, đầy đủ tính năng.",
        link: ""
    },
    {
        time: "Tương lai",
        number: "TT6",
        name: "Thiết kế giao diện phần mềm trên hệ thống nội bộ INEVO theo bản thiết kế được cung cấp.",
        link: ""
    },
    
    {
        time: "Tương lai",
        number: "TT7",
        name: "Sử dụng Bảng quản trị trên hệ thống mạng nội bộ INEVO để thực hiện phần mềm quản lý bài viết của bản thân trên hệ thống INEVO.",
        link: ""
    },
    {
        time: "Tương lai",
        number: "TT8(Trải nghiệm)",
        name: "Sử dụng công cụ INEVO để thiết lập phần mềm quản lý thông tin cơ bản theo yêu cầu.",
        link: ""
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

