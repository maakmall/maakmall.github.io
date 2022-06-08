const view = {
  home: `<div class="pt-32 md:pt-36 xl:pt-40 flex">
          <div class="w-full font-viga text-black">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-widest">Hi,</h1>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-widest my-2">I'm Akmal,</h1>
            <h1 class="text-3xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-widest">Web Developer.</h1>
            <h2 class="font-inter text-xl sm:text-2xl lg:text-3xl sm:mt-2 mb-4">Back End Developer</h2>
            <a href="#about" class="px-2 py-1 bg-white text-lg ring-2 ring-black rounded-lg hover:bg-black hover:text-white transition">About Me</a>
          </div>
          <div class="w-full xl:w-3/4 hidden md:block md:-mt-16 lg:-mt-28 xl:-mt-32">
            <img src="img/code-typing-bro.svg" alt="Hero Image">
          </div>
        </div>`,
  about: `<div class="pt-16 md:pt-20 lg:pt-32 xl:pt-40 flex">
            <div class="w-full font-viga text-xl md:text-lg lg:text-xl text-black md:pr-10 xl:pr-24">
              <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5">About Me</h2>
              <p class="font-inter">My Name is Muhammad Akmal, I'm a Back End Developer and currently studying Computer Science. I'm from Serang, Indonesia.</p>

              <p class="font-inter my-3">Well organised person, problem solver, independent with high intention to detail.</p>
              
              <p class="font-inter">In my works I always try to combine efficiency
              with functional aspects, looking for the right balance to communicate without annoying.</p>
            </div>
            <div class="w-full hidden md:block md:mt-12 lg:-mt-10 xl:-mt-16">
              <img src="img/about.svg" alt="Hero Image" class="">
            </div>
          </div>`,
  skills: `<div class="pt-16 md:pt-36 xl:pt-40 md:flex">
            <div class="w-full font-inter text-black md:pr-10 xl:pr-24">
              <h2 class="font-viga text-4xl sm:text-5xl lg:text-6xl font-bold mb-5">My Skills</h2>
              <p class="text-lg">The main area of my expertise is back end development (server side of the web).</p>
              <p class="text-lg my-3">Build dynamic Web Application with PHP, Node.Js, MongoDB or MySQL.</p>
              <p class="text-lg">I also have full stack development experience with HTML, CSS, Bootstrap or TailwindCSS.</p>
              <p class="text-lg mt-3"><a href="#contact" class="font-bold underline hover:opacity-70 transition">Contact me</a> for more details.</p>
            </div>
            <div class="w-full mt-10 md:pt-36 xl:w-3/4 md:-mt-16 lg:-mt-28 xl:-mt-32 flex">
              <div class="ring-2 w-1/2 mr-5 ring-black rounded-lg overflow-hidden">
                <span class="bg-black block py-2 text-white font-viga text-center text-xl">Front End</span>
                <ul class="list-disc px-5 sm:px-10 text-xl text-black font-viga">
                  <li class="py-1 mt-2">HTML</li>
                  <li class="py-1">CSS</li>
                  <li class="py-1">Javascript</li>
                  <li class="py-1 mb-2">TailwindCSS</li>
                </ul>
              </div>
              <div class="ring-2 w-1/2 ring-black rounded-lg overflow-hidden">
                <span class="bg-black block py-2 text-white font-viga text-center text-xl">Back End</span>
                <ul class="list-disc px-5 sm:px-10 text-xl text-black font-viga">
                  <li class="py-1 mt-2">PHP</li>
                  <li class="py-1">NodeJs</li>
                  <li class="py-1">MongoDB</li>
                  <li class="py-1">MySQL</li>
                </ul>
              </div>
            </div>
          </div>`,
  projects: `<div class="pt-16 pb-10 md:flex">
              <div class="w-full font-viga text-black md:pr-5">
                <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5">My Projects</h2>
                <h3 class="text-2xl md:text-3xl mb-4">Project Name</h3>
                <img src="img/projects/project1.jpg" alt="Project 1" class="rounded-lg shadow-lg md:hidden">
                <p class="font-inter text-xl mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus placeat sapiente consectetur accusantium magnam similique quod corrupti sit modi tempora omnis eaque molestias magni, atque saepe. Placeat sed explicabo fugiat numquam fugit nesciunt harum eveniet repellat nisi, quia aliquid dolore!</p>
                <p class="mt-10 text-xl"><span class="font-bold">Tools :</span> HTML, CSS & Javascript</p>
                <p class="mb-5 text-xl"><span class="font-bold">Design by :</span> Me</p>
                <a href="#" class="px-2 py-1 mr-3 text-lg bg-white ring-2 ring-black rounded-lg hover:bg-black hover:text-white transition ">Visit</a>
                <a href="#" class="px-2 py-1 bg-black text-lg text-white ring-2 ring-black rounded-lg hover:bg-white hover:text-black transition">Source Code</a>
              </div>
              <div class="w-full hidden md:block md:mt-24">
                <img src="img/projects/project1.jpg" alt="Project Image" class="rounded-lg shadow-lg">
              </div>
            </div>
            <div class="pt-16 pb-10 md:flex">
              <div class="w-full font-viga text-black md:pr-5">
                <h3 class="text-2xl md:text-3xl mb-4">Project Name</h3>
                <img src="img/projects/project1.jpg" alt="Project 1" class="rounded-lg shadow-lg md:hidden">
                <p class="font-inter text-xl mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus placeat sapiente consectetur accusantium magnam similique quod corrupti sit modi tempora omnis eaque molestias magni, atque saepe. Placeat sed explicabo fugiat numquam fugit nesciunt harum eveniet repellat nisi, quia aliquid dolore!</p>
                <p class="mt-10 text-xl"><span class="font-bold">Tools :</span> HTML, CSS & Javascript</p>
                <p class="mb-5 text-xl"><span class="font-bold">Design by :</span> Me</p>
                <a href="#" class="px-2 py-1 mr-3 text-lg bg-white ring-2 ring-black rounded-lg hover:bg-black hover:text-white transition ">Visit</a>
                <a href="#" class="px-2 py-1 bg-black text-lg text-white ring-2 ring-black rounded-lg hover:bg-white hover:text-black transition">Source Code</a>
              </div>
              <div class="w-full hidden md:block md:mt-6">
                <img src="img/projects/project1.jpg" alt="Project Image" class="rounded-lg shadow-lg">
              </div>
            </div>`,
  contact: `<div class="pt-16 md:pt-20 md:flex">
              <div class="w-full font-viga text-black md:pr-10 lg:pr-20 xl:pr-32">
                <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5">Contact Me</h2>
                <form name="contact-form">
                  <input type="text" placeholder="Name" class="ring-2 ring-black rounded-lg px-2 py-1 bg-black text-white w-full mb-5" name="name" required>
                  <input type="email" placeholder="Email" class="ring-2 ring-black rounded-lg px-2 py-1 bg-black text-white w-full mb-5" name="email" required>
                  <textarea rows="5" placeholder="Message" class="ring-2 ring-black rounded-lg px-2 py-1 bg-black text-white w-full mb-5" name="message" required></textarea>
                  <button type="submit" class="ring-2 ring-black py-1 px-2 rounded-lg bg-black text-white hover:text-black hover:bg-white transition block ml-auto" title="Send a Message"><i class="bi bi-send-fill mr-1.5"></i> <span>Send</span></button>
                </form>
                <hr class="my-10 border border-black rounded md:hidden">
              </div>
              <div class="w-full flex justify-evenly md:flex-col md:pl-10 lg:pl-20 xl:pl-32 md:border-l-4 md:border-black font-viga">
                <a href="mailto:makmal316@gmail.com" class="text-2xl lg:text-3xl text-black hover:opacity-70 transition" target="_blank"><i class="bi bi-envelope"></i> <span class="hidden md:inline ml-3">makmal316@gmail.com</span></a>
                <a href="https://www.instagram.com/maakmall" class="text-2xl lg:text-3xl text-black hover:opacity-70 transition" target="_blank"><i class="bi bi-instagram"></i> <span class="hidden md:inline ml-3">@maakmall</span></a>
                <a href="https://www.facebook.com/maakmall" class="text-2xl lg:text-3xl text-black hover:opacity-70 transition" target="_blank"><i class="bi bi-facebook"></i> <span class="hidden md:inline ml-3">maakmall</span></a>
                <a href="https://www.github.com/maakmall" class="text-2xl lg:text-3xl text-black hover:opacity-70 transition" target="_blank"><i class="bi bi-github"></i> <span class="hidden md:inline ml-3">maakmall</span></a>
              </div>
            </div>`,
};

export default view