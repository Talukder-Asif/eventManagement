import image_1 from "/src/assets/bottom-logo.png"
const Footer = () => {
    return (
<footer className="footer md:grid md:grid-cols-4 p-10 bg-[#1f1f1f] text-base-content">
    <div className="col-span-2">
        <img src={image_1} alt="" />
        <p className="text-gray-300">Bacon ipsum dolor amet filet mignon pork belly hamburger pork tail shank pig andouille, pork loin cow sausage meatball capicola. Kielbasa porchetta meatball pig pork loin short ribs sirloin jowl landjaeger tail beef ribs rump</p>
    </div> 
    <div>
        <header className="footer-title text-white text-xl">Services</header> 
        <a className="link text-white link-hover">Branding</a> 
        <a className="link text-white link-hover">Design</a> 
        <a className="link text-white link-hover">Marketing</a> 
        <a className="link text-white link-hover">Advertisement</a>
    </div> 
    <div>
        <header className="footer-title  text-white text-xl">Company</header> 
        <a className="link text-white link-hover">About us</a> 
        <a className="link text-white link-hover">Contact</a> 
        <a className="link text-white link-hover">Jobs</a> 
        <a className="link text-white link-hover">Press kit</a>
    </div>
</footer>
    );
};

export default Footer;