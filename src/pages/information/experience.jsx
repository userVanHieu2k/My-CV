import { BsFillInfoCircleFill } from 'react-icons/bs'

const experience = () => {
    return (
        <>
            <div className="card-box">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="section-title">
                            <h2>experience</h2>
                            <div class="title-border"></div>

                        </div>
                    </div>
                </div>
                <div class="timeline-section">
                    <div class="timeline-items">
                        <div class="timeline-item">
                            <div class="timeline-dot"><BsFillInfoCircleFill className='fb'></BsFillInfoCircleFill></div>
                            <div class="timeline-date">2022</div>
                            <div class="timeline-content">
                                <h4>Ha Noi University of Design</h4>
                                <p> Learn HTML,CSS,JS </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default experience