export const Banner = () => {
    return (
       <section className="banner" id="home">
        <Container>
            <Row className ="aligh-items-center">
                <Col xs={12} md={6} xl={7}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm ASNA`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                </Col>
            </Row>
        </Container>

       </section> 
    )
}