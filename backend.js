function generateIntro() {

    const subject =
        document.getElementById("subject").value.trim();

    const teacher =
        document.getElementById("teacher").value.trim();

    const gender =
        document.getElementById("gender").value;

    const title =
        gender === "male" ? "Mr." : "Mrs.";

    let introduction = "";

    switch(subject.toLowerCase()) {

        case "english":
            introduction = `
Hello ${title} ${teacher}!

This is an introduction for my English multidisciplinary summer project.

What happens when geography meets imagination? You get an epic road trip across India! Welcome to "Roadtrip BHARAT: Nagpur to Puri."

In this assignment, the letters B, H, A, R, A, and T come alive as six friends exploring the breathtaking route connecting Maharashtra and Odisha. Along their journey, each traveler uncovers a unique cultural treasure, capturing its essence through expressive acrostic poetry.

To commemorate their travels, they’ve also designed symbolic passport stamps that celebrate how different cultures, languages, and traditions seamlessly blend into 'Unity in Diversity.'

Thank you!
`;
            break;

        case "math":
        case "mathematics":
        case "maths":
            introduction = `
Hello ${title} ${teacher}!

This is an introduction for my Mathematics multidisciplinary summer project.

At first glance, a colorful Rangoli on a doorstep in Maharashtra or a mesmerizing Mandala design from Odisha might seem purely artistic. However, beneath their symmetrical beauty lies a hidden world of precise mathematics.

This project bridges the gap between culture and calculus by mapping these traditional masterpieces onto the Cartesian Plane. By treating intricate art lines as a series of distinct coordinates, we will use the Distance Formula to decode the geometric symmetry and spacing inherent in these regional designs.

In doing so, this work reveals that artists, whether intentionally or intuitively, have always used coordinate geometry as a fundamental tool for creating balance, proportion, and beauty.

Thank you!
`;
            break;

        case "science":
            introduction = `
Hello ${title} ${teacher}!

This is an introduction for my Science multidisciplinary summer project.

Music is the heartbeat of culture, but behind every rhythm and melody lies the fascinating science of sound.

In this project, we explore the acoustic world of Maharashtra and Odisha by examining four unique regional instruments: the rhythmic Dholki, the resonant Mardala, the melodic Mahuri, and the chiming Ghungroo.

Each of these instruments speaks its own physical language, offering a perfect real-world laboratory to observe how different materials and structures influence vibrations, pitch, and loudness.

By breaking down how these instruments generate their distinct tones, whether loud, soft, high-pitched, or deeply rhythmic, this project reveals the beautiful symphony where science meets cultural tradition.

Thank you!
`;
            break;

        case "social science":
        case "sst":
        case "social":
            introduction = `
Hello ${title} ${teacher}!

This is an introduction for my Social Science multidisciplinary summer project.

The landscapes of India are as diverse as they are beautiful, acting as a canvas where nature and culture meet.

This project takes an art-integrated approach to explore the Physical Features of Maharashtra and Odisha, merging geographical data with visual creativity.

By utilizing illustrative maps, detailed drawings, and analytical charts, we will journey through the towering mountains, sprawling plateaus, expansive coastal plains, and life-giving rivers and lakes that characterize these two unique states.

Through this creative exploration, the project seeks to uncover the deep-rooted connection between geography and human life, illustrating how physical landforms subtly dictate the climate, agriculture, and cultural fabric of both regions.

Thank you!
`;
            break;

        default:
            introduction = `
Hello ${title} ${teacher}!

The subject "${subject}" is not currently available.

Available subjects:
• English
• Mathematics / Maths / Math
• Science
• Social Science / SST

Please enter one of the supported subjects.

Thank you!
`;
    }

    document.getElementById("output").textContent =
        introduction;
}

function copyText() {

    const text =
        document.getElementById("output").textContent;

    navigator.clipboard.writeText(text);

    alert(" Introduction copied!");
}