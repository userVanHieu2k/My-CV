import { GiCutDiamond, GiLockedFortress, GiRocket } from 'react-icons/gi'

const education = () => {
    return (
        <>
            <div class="card-box">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="section-title">
                            <h2>education</h2>
                            <div class="title-border"></div>

                        </div>
                    </div>
                </div>
                <div class="timeline-section">
                    <div class="timeline-items">
                        <div class="timeline-item">
                            <div class="timeline-dot"><GiCutDiamond className='fb' /></div>
                            <div class="timeline-date">2011-2015</div>
                            <div class="timeline-content">
                                <h4>Nhan Binh secondary school</h4>
                                <p>Nhan Binh secondary school is located in Nhan Binh-Ly Nhan-Ha Nam</p>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-dot"><GiLockedFortress className="fb" /></div>
                            <div class="timeline-date">2016-2018</div>
                            <div class="timeline-content">
                                <h4>Nam Cao high school</h4>
                                <p>Nam Cao high school is located in Nhan My-Ly Nhan-Ha Nam.</p>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-dot"><GiRocket className='fb' /></div>
                            <div class="timeline-date">2019-2022</div>
                            <div class="timeline-content">
                                <h4>Ha Noi University of Design</h4>
                                <p> Hanoi University includes 3 campuses:
                                    <br />
                                    Headquarter: No. 298 Cau Dien Street, Bac Tu Liem District, Hanoi<br />
                                    Campus 2: Tay Tuu Ward, Bac Tu Liem, Hanoi<br />
                                    Campus 3: Le Hong Phong, City. Phu Ly, Ha Nam</p>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </>
    )
}
export default education