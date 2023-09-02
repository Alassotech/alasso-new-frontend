import React from 'react'
import './css/Services.css'

const Services = () => {
    return (
        <div className='Services-page'>

            {/* Left column containers */}
            <div className='grid-sections grid-section-left'>
                <div className='services-left-image-container'>
                    <img src='/images/services_image1.jpg' alt='services-left-image' className='services-left-image' />
                </div>
                <div className='services-filters'>
                    <h6 className='services-sm-heading'>FILTERS</h6>
                    <div className='filter-options'>Latest First <button className='latest-first-btn toggle-on-off' ><i class="fa fa-toggle-on" aria-hidden="true" ></i></button></div>
                    <div className='filter-options'>Oldest First <button className='oldest-first-btn toggle-on-off' ><i class="fa fa-toggle-off" aria-hidden="true"></i></button></div>
                </div>
            </div>

            {/* Middle column containers */}
            <div className='grid-sections grid-section-mid'>
                <div className='services-post'>
                    <strong>TITLE: </strong> <input type='text' className='post-title-input' />
                    <div className='post-section'>
                        <div className='attachmenete-btns'>
                            <button className='attachment-btn add-image'><i class="fa fa-picture-o" aria-hidden="true">+</i></button>
                            <button className='attachment-btn add-link'><i class="fa fa-link" aria-hidden="true"></i></button>
                        </div>
                        <textarea cols="75" rows="3" className='discription-attachment' />
                        <button className='send-icon'>
                            <i class="fa fa-paper-plane" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>

                <div className='services-all-posts'>
                    <h6 className='services-sm-heading'>ALL POSTS</h6>

                    <div className='services-post-container'>

                        <div className="card services-post-card">
                            <h6 className="card-title">Card title</h6>
                            <img src="/images/services_image2.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" className="btn btn-primary post-link">Link 1</a>
                                <a href="/" className="btn btn-primary post-link">Link 2</a>
                            </div>
                            <div className='post-card-footer'>
                                <span>324 views</span>
                                <div>
                                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    <i class="fa fa-trash" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                        <div className="card services-post-card">
                            <h6 className="card-title">Card title</h6>
                            <img src="/images/services_image2.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" className="btn btn-primary post-link">Link 1</a>
                                <a href="/" className="btn btn-primary post-link">Link 2</a>
                            </div>
                            <div className='post-card-footer'>
                                <span>324 views</span>
                                <div>
                                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    <i class="fa fa-trash" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                        <div className="card services-post-card">
                            <h6 className="card-title">Card title</h6>
                            <img src="/images/services_image1.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. </p>
                                <a href="/" className="btn btn-primary post-link">Link 1</a>
                                <a href="/" className="btn btn-primary post-link">Link 2</a>
                            </div>
                            <div className='post-card-footer'>
                                <span>324 views</span>
                                <div>
                                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    <i class="fa fa-trash" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>

                        <div className="card services-post-card">
                            <h6 className="card-title">Card title</h6>
                            <img src="/images/services_image2.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" className="btn btn-primary post-link">Link 1</a>
                                <a href="/" className="btn btn-primary post-link">Link 2</a>
                            </div>
                            <div className='post-card-footer'>
                                <span>324 views</span>
                                <div>
                                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    <i class="fa fa-trash" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                        <div className="card services-post-card">
                            <h6 className="card-title">Card title</h6>
                            <img src="/images/services_image2.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" className="btn btn-primary post-link">Link 1</a>
                                <a href="/" className="btn btn-primary post-link">Link 2</a>
                            </div>
                            <div className='post-card-footer'>
                                <span>324 views</span>
                                <div>
                                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    <i class="fa fa-trash" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                        <div className="card services-post-card">
                            <h6 className="card-title">Card title</h6>
                            <img src="/images/services_image2.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" className="btn btn-primary post-link">Link 1</a>
                                <a href="/" className="btn btn-primary post-link">Link 2</a>
                            </div>
                            <div className='post-card-footer'>
                                <span>324 views</span>
                                <div>
                                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    <i class="fa fa-trash" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>

                        <div className="card services-post-card">
                            <h6 className="card-title">Card title</h6>
                            <img src="/images/services_image2.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" className="btn btn-primary post-link">Link 1</a>
                                <a href="/" className="btn btn-primary post-link">Link 2</a>
                            </div>
                            <div className='post-card-footer'>
                                <span>324 views</span>
                                <div>
                                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    <i class="fa fa-trash" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                        <div className="card services-post-card">
                            <h6 className="card-title">Card title</h6>
                            <img src="/images/services_image2.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" className="btn btn-primary post-link">Link 1</a>
                                <a href="/" className="btn btn-primary post-link">Link 2</a>
                            </div>
                            <div className='post-card-footer'>
                                <span>324 views</span>
                                <div>
                                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    <i class="fa fa-trash" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                        <div className="card services-post-card">
                            <h6 className="card-title">Card title</h6>
                            <img src="/images/services_image2.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" className="btn btn-primary post-link">Link 1</a>
                                <a href="/" className="btn btn-primary post-link">Link 2</a>
                            </div>
                            <div className='post-card-footer'>
                                <span>324 views</span>
                                <div>
                                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    <i class="fa fa-trash" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* Right column containers */}
            <div className='grid-sections grid-section-right'>
                <div className='services-profile-section'>
                    <div>
                        <img src='/images/services_image2.jpg' alt='services_image2' className='services-profile-ieee-image'></img>
                    </div>
                    <div className='services-profile-image-container'>
                        <img src='/images/services_image3.jpg' alt='services_image3' className='services-profile-image'></img>
                    </div>
                    <strong>IEEE Member Name</strong>
                    <p>Any other info</p>
                </div>
                <div className='ieee-members-section'>
                    <h6 className='services-sm-heading'>IEEE MEMBERS</h6>
                    <div className='ieee-member-list'>
                        <div className='ieee-member'><img src='/images/services_image3.jpg' className='ieee-member-profile' alt='ieee-member-profile' /><span>Komal Kalra</span></div>
                        <div className='ieee-member'><img src='/images/services_image3.jpg' className='ieee-member-profile' alt='ieee-member-profile' /><span>Shivam Kumar</span></div>
                        <div className='ieee-member'><img src='/images/services_image3.jpg' className='ieee-member-profile' alt='ieee-member-profile' /><span>Anish Sharma</span></div>
                        <div className='ieee-member'><img src='/images/services_image3.jpg' className='ieee-member-profile' alt='ieee-member-profile' /><span>Komal Kalra</span></div>
                        <div className='ieee-member'><img src='/images/services_image3.jpg' className='ieee-member-profile' alt='ieee-member-profile' /><span>Shivam Kumar</span></div>
                        <div className='ieee-member'><img src='/images/services_image3.jpg' className='ieee-member-profile' alt='ieee-member-profile' /><span>Anish Sharma</span></div>
                        <div className='ieee-member'><img src='/images/services_image3.jpg' className='ieee-member-profile' alt='ieee-member-profile' /><span>Komal Kalra</span></div>
                        <div className='ieee-member'><img src='/images/services_image3.jpg' className='ieee-member-profile' alt='ieee-member-profile' /><span>Shivam Kumar</span></div>
                        <div className='ieee-member'><img src='/images/services_image3.jpg' className='ieee-member-profile' alt='ieee-member-profile' /><span>Anish Sharma</span></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Services
