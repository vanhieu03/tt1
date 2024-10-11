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

// render skill
const skillContent = [
    {
        img:'https://cloudoffice.com.vn/assetmanager/liveEditer/b%E1%BB%91%20c%E1%BB%A5c%20b%C3%A0i%20thuy%E1%BA%BFt%20tr%C3%ACnh.png',
        name: 'Kỹ năng thuyết trình',
        des: 'Khả năng truyền đạt ý tưởng một cách rõ ràng và thu hút người nghe, giúp giải thích các giải pháp kỹ thuật hoặc ý tưởng sáng tạo một cách dễ hiểu.'
    },
    {
        img:'./imgs/anh2.jpeg',
        name: 'Tư duy sáng tạo',
        des: 'Khả năng nghĩ ra những ý tưởng mới và giải pháp độc đáo cho các vấn đề phức tạp, giúp cải thiện trải nghiệm người dùng và phát triển sản phẩm khác biệt.'
    },
    {
        img:'./imgs/anh3.jpg',
        name: 'Giải quyết vấn đề',
        des: 'Khả năng phân tích tình huống và đưa ra các giải pháp phù hợp và hiệu quả khi gặp phải thách thức kỹ thuật hoặc tổ chức.'
    },
    {
        img:'./imgs/anh4.png',
        name: 'Tư duy logic',
        des: 'Sự sắp xếp các suy nghĩ và hành động theo một trình tự hợp lý để xử lý các vấn đề một cách hiệu quả và có tổ chức.'
    },
    {
        img:'./imgs/anh5.jpg',
        name: 'Khả năng làm việc nhóm',
        des: 'Khả năng phối hợp tốt với các thành viên khác trong nhóm, chia sẻ thông tin, hỗ trợ nhau để đạt được mục tiêu chung.'
    },
    {
        img:'./imgs/anh6.jpg',
        name: 'Chú ý đến chi tiết',
        des: 'Tập trung vào các yếu tố nhỏ nhưng quan trọng, giúp phát hiện lỗi và đảm bảo chất lượng sản phẩm cuối cùng.'
    },
    {
        img:'./imgs/anh7.jpg',
        name: 'Tư duy người dùng',
        des: 'Hiểu rõ nhu cầu và trải nghiệm của người dùng cuối để thiết kế các giao diện và tính năng dễ sử dụng, tiện lợi và trực quan.'
    },
    {
        img:'./imgs/anh8.jpg',
        name: 'Kỹ năng code',
        des: 'Khả năng viết và tối ưu mã nguồn để xây dựng ứng dụng phần mềm hiệu quả, bao gồm việc thành thạo ngôn ngữ lập trình và sử dụng các công cụ, thuật toán phù hợp.'
    }
]

const containerLeftWrapper = document.querySelector('.container-left-wrapper')
skillContent.forEach(data =>{
    const containerLeftSkill = document.createElement('div')
    containerLeftSkill.classList.add('container-left-skills')

    const containerLeftSkillPhoto = document.createElement('div')
    containerLeftSkillPhoto.classList.add('container-left-skills-photo')
    containerLeftSkillPhoto.innerHTML = `<img src="${data.img}" alt="anhloi" class="container-skills-photo-img">`

    const containerLeftSkillContent = document.createElement('div')
    containerLeftSkillContent.classList.add('container-left-skills-content')
    containerLeftSkillContent.innerHTML = `
    <div class="container-skills-content-header">${data.name}</div>
    <div class="container-skills-content-des">${data.des}</div>`

    containerLeftSkill.appendChild(containerLeftSkillPhoto)
    containerLeftSkill.appendChild(containerLeftSkillContent)

    containerLeftWrapper.appendChild(containerLeftSkill)
})
const loadMore = document.createElement('span')
loadMore.classList.add('loadMore')
loadMore.classList.add('hover_underline')
loadMore.innerText = 'Load more'
containerLeftWrapper.appendChild(loadMore)

const containerLeftSkillElement = [...document.querySelectorAll('.container-left-skills')]
containerLeftSkillElement.forEach((element, index) =>{
    element.style.display = (index < 2) ? 'flex' : 'none'
})

loadMore.addEventListener('click', ()=>{
    const containerLeftSkillElement2 = containerLeftSkillElement.slice(2)
    if(containerLeftSkillElement2[0].style.display === 'none'){
        containerLeftSkillElement2.forEach(element =>{
            element.style.display = 'flex'
        })
        loadMore.innerText = 'Show less'
    }
    else{
        containerLeftSkillElement2.forEach(element =>{
            element.style.display = 'none'
        })
        loadMore.innerText = 'Load more'
    }
})