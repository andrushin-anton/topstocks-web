import React from 'react';
import MenuTab from '../../components/menu-tab/menu-tab.component';
import SEOComponent from '../../components/seo/seo.component';

const AboutPage = () => {
    return (
        <div>
        <SEOComponent title="About" />
        <MenuTab activeTab='none'/>
        <div className="tab-content">
            <p> 
                Hey there,<br/>
                my name is Anton and I am an individual investor and professional web engineer.<br/>
                Many years back I was more like a swing or day trader who worked in different markets including stocks exchange and forex. But then after trying several strategies I realised that none of them works perfect for me and so I became one of Warren Buffett’s fans.
            </p>
            <p>
                One of his greatest thoughts that changed my life as a trader/investor was this:<br/>
                <i>"If you aren't willing to own a stock for ten years, don't even think about owning it for ten minutes."</i>  - <b>Warren Buffett</b>
            </p>  
            <p>
                This makes perfect sense IMHO and so I dig into the fundamental analysis which may say a lot about a company opposed to the technical analysis which only gives the idea about where the company is right now.
            </p>
            <p>
                The idea behind TopStocks app is to find the best companies using fundamental analysis, then let the technical analysis watch for those on a daily basis and trigger an event whenever there is about to start a new trend.
            </p>
        </div>
        </div>
    )
}

export default AboutPage;