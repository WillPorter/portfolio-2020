import ImagePlaceholder from '../components/ImagePlaceholder';

const About = () => {

        return(
            <>
                <h1>This is the about page</h1>
                <p className="gradient">After graduating from James Madison University in 2006 with a BS in Interactive Media, I moved to NYC where I worked for a top interactive agency, Situation Interactive, for 2 years. Longing for big mountains and sunshine, I then moved to CA in 2009 Where I worked as a freelance creative until Jan of 2012. In Jan of 2012, I took a job as a web designer / developer for the Truckee, CA based POND Collective. In October of 2017, I moved back to my hometown of Virginia Beach and immediately started working at Obrien et al Advertising full time. Each workplace has offered me unuiqe opportunities in learning different technologies and contributing to my professional skillsets.</p>
                <ImagePlaceholder key={Date.now()} />
                
            </>
            );

}

export default About;