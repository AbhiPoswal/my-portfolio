// Blades Code
gsap.to('#first_blade',
    {
        duration: 7,
        rotationZ: 4300,
        ease: "linear"
    })

gsap.to('#second_blade',
    {
        duration: 7,
        rotationZ: 4300,
        delay: 1,
        ease: "linear"
    })

gsap.to('#third_blade',
    {
        duration: 7,
        rotationZ: 4300,
        delay: 2,
        ease: "linear"
    })

gsap.to('#fourth_blade',
    {
        duration: 7,
        rotationZ: 4300,
        delay: 3,
        ease: "linear"
    })

gsap.to('#fifth_blade',
    {
        duration: 7,
        rotationZ: 4300,
        delay: 4,
        ease: "linear"
    })

    gsap.to('#sixth_blade',
    {
        duration: 7,
        rotationZ: 4300,
        delay: 5,
        ease: "linear"
    })

// Clouds Code

gsap.from('#first_cloud',
    {
        duration: 2,
        x: "-300px",
        ease: "linear",
        opacity: 0,
        delay: 6
    })

gsap.from('#second_cloud',
    {
        duration: 2,
        y: "-200px",
        ease: "linear",
        opacity: 0,
        delay: 6.5
    })

gsap.from('#third_cloud',
    {
        duration: 2,
        y: "-200px",
        ease: "linear",
        opacity: 0,
        delay: 7
    })

gsap.from('#fourth_cloud',
    {
        duration: 2,
        y: "-200px",
        ease: "linear",
        opacity: 0,
        delay: 7.5
    })

gsap.from('#fifth_cloud',
    {
        duration: 2,
        x: "1000px",
        ease: "linear",
        opacity: 0,
        delay: 8
    })

gsap.from('#sixth_cloud',
    {
        duration: 2,
        x: "-600px",
        ease: "linear",
        opacity: 0,
        delay: 8
    })

gsap.from('#seventh_cloud',
    {
        duration: 2,
        x: "1000px",
        ease: "linear",
        opacity: 0,
        delay: 8
    })

gsap.from('#eighth_cloud',
    {
        duration: 2,
        x: "1000px",
        ease: "linear",
        opacity: 0,
        delay: 8
    })

gsap.from('#nineth_cloud',
    {
        duration: 2,
        x: "-600px",
        ease: "linear",
        opacity: 0,
        delay: 8
    })

gsap.from('#tenth_cloud',
    {
        duration: 2,
        x: "1000px",
        ease: "linear",
        opacity: 0,
        delay: 8
    })

// zooming on clouds

gsap.to('#first_cloud',
    {
        duration: 2,
        scale: 1.2,
        ease: "linear",
        delay: 7,
        repeat: -1,
        yoyo: true,
    })

gsap.to('#second_cloud',
    {
        duration: 2,
        scale: 1.2,
        ease: "linear",
        delay: 7.5,
        repeat: -1,
        yoyo: true,
    })

gsap.to('#third_cloud',
    {
        duration: 2,
        scale: 1.2,
        ease: "linear",
        delay: 8.5,
        repeat: -1,
        yoyo: true,
    })

gsap.to('#fourth_cloud',
    {
        duration: 2,
        scale: 1.2,
        ease: "linear",
        delay: 8,
        repeat: -1,
        yoyo: true,
    })

gsap.to('#fifth_cloud',
    {
        duration: 2,
        scale: 1.2,
        ease: "linear",
        delay: 7,
        repeat: -1,
        yoyo: true,
    })

gsap.to('#sixth_cloud',
    {
        duration: 2,
        scale: 1.2,
        ease: "linear",
        delay: 8,
        repeat: -1,
        yoyo: true,
    })

gsap.to('#seventh_cloud',
    {
        duration: 2,
        scale: 1.2,
        ease: "linear",
        delay: 9,
        repeat: -1,
        yoyo: true,
    })

gsap.to('#eighth_cloud',
    {
        duration: 2,
        scale: 1.2,
        ease: "linear",
        delay: 9.5,
        repeat: -1,
        yoyo: true,
    })

gsap.to('#nineth_cloud',
    {
        duration: 2,
        scale: 1.2,
        ease: "linear",
        delay: 10,
        repeat: -1,
        yoyo: true,
    })

gsap.to('#tenth_cloud',
    {
        duration: 2,
        // scale: 1.2,
        ease: "linear",
        delay: 9.5,
        // repeat: -1,
        // yoyo: true,
    })

// reverse clouds

gsap.to('#first_cloud',
    {
        duration: 2,
        x: "-300px",
        ease: "linear",
        opacity: 0,
        delay: 17
    })

gsap.to('#second_cloud',
    {
        duration: 2,
        y: "-200px",
        ease: "linear",
        opacity: 0,
        delay: 17.5
    })

gsap.to('#third_cloud',
    {
        duration: 2,
        y: "-200px",
        ease: "linear",
        opacity: 0,
        delay: 17.7
    })

gsap.to('#fourth_cloud',
    {
        duration: 2,
        y: "-200px",
        ease: "linear",
        opacity: 0,
        delay: 18.5
    })

gsap.to('#fifth_cloud',
    {
        duration: 2,
        x: "1000px",
        ease: "linear",
        opacity: 0,
        delay: 18.5
    })

gsap.to('#sixth_cloud',
    {
        duration: 2,
        x: "-600px",
        ease: "linear",
        opacity: 0,
        delay: 19
    })

gsap.to('#seventh_cloud',
    {
        duration: 2,
        x: "1000px",
        ease: "linear",
        opacity: 0,
        delay: 19.8
    })

gsap.to('#eighth_cloud',
    {
        duration: 2,
        x: "1000px",
        ease: "linear",
        opacity: 0,
        delay: 20.5
    })

gsap.to('#nineth_cloud',
    {
        duration: 2,
        x: "-600px",
        ease: "linear",
        opacity: 0,
        delay: 21
    })

gsap.to('#tenth_cloud',
    {
        duration: 2,
        x: "330px",
        y:"120",
        ease: "linear",
        // opacity: 0,
        delay: 21.5
    })

// rain section

gsap.fromTo("#rain", 27, { top: '-150%', ease: Power1.easeInOut }, { top: '150%', ease: Power1.easeInOut })

gsap.from('#rain',
    {
        opacity: 0,
        y: '-150px',
        delay: 8
    })

// sun section

gsap.from('#sun',
{
    opacity:0,
    duration:1,
    delay:22,
    ease: "linear"
})

// flower section

gsap.from('#flowers',
{
    opacity:0,
    duration:2,
    delay:23,
    ease: "linear"
})

// Bird section

gsap.from('#bird',
{
    x:'2050',
    y:'100',
    ease: "linear",
    delay:23,
    duration:10
})

gsap.from('#second_bird',
{
    x:'2050',
    y:'130',
    ease: "linear",
    delay:24,
    duration:10
})

gsap.from('#third_bird',
{
    x:'2050',
    y:'180',
    ease: "linear",
    delay:25,
    duration:10
})

gsap.from('#fourth_bird',
{
    x:'2050',
    y:'70',
    ease: "linear",
    delay:26,
    duration:10
})

// fade it all

gsap.to('.container',
{
    opacity:0,
    delay:38,
    ease:"linear"
})

// gsap.to('#main_bg',
// {
//     opacity:0,
//     delay:38,
//     ease:"linear"
// })

// gsap.addLabel('#greeting')

gsap.from('#greeting',
{
       delay:38,
       duration:3,
       scale:2,
       opacity:0,
       color:'white'
})

gsap.to('#back',{
    opacity:1,
    delay:38
})

// gsap.play('#greeting')
