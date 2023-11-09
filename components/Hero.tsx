interface IProps {
    title: string;
    subtitle: string;
    bg: string | null;
}

const Hero = (props: IProps) => {
    const { title, subtitle, bg } = props;
    return (
        <header className="intro-header" style={{ backgroundImage: `url(${bg ?? 'img/home-bg.jpg'})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                        <div className="site-heading">
                            <h1>{title}</h1>
                            <hr className="small" />
                            <span className="subheading">{subtitle}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Hero;