import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <p className='text-xl mt-20'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi reprehenderit omnis iusto laboriosam necessitatibus quod recusandae earum rem alias, dolorum eos itaque hic. Dignissimos nisi beatae, enim alias similique maiores doloremque exercitationem libero, illo sed ab veniam nobis provident deleniti optio natus id maxime. Culpa distinctio illum atque veritatis impedit.
            </p>

            <br />

            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, obcaecati perspiciatis? Impedit aliquam dolore, sequi consectetur modi delectus voluptatem! Animi accusamus veritatis praesentium excepturi architecto nam! Enim et dolore ipsam quos incidunt fugiat perferendis ea ratione. Dolores laborum molestias saepe commodi esse voluptates delectus repudiandae porro nobis maiores! Expedita, mollitia.</p>
        </div>
    </div>
  )
}

export default About