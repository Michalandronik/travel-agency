import React from "react";
import styles from './HappyHourAd.module.scss';
import PropTypes from 'prop-types';
import { formatTime } from '../../../utils/formatTime';

class HappyHourAd extends React.Component {
  constructor(){
    super();

    /* run this.forceUpdate() every second */
    setInterval(()=> this.forceUpdate(), 1000);
  }

  getCountdownTime(){
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));
  
    if(currentTime.getUTCHours() >= 12){
      nextNoon.setUTCDate(currentTime.getUTCDate()+1);
    }
  
    return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
  }

  render() {
    let getCountdownTime = this.getCountdownTime();
    let { title, subtitle } = this.props;
    return (
      <div className={styles.component} >
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.promoDescription}>{formatTime(getCountdownTime)}</div>
        <div className={styles.subtitle}>{subtitle}</div>
        {/* test div */}
        <div className='test'>{this.props.promoDescription}</div>
      </div>
    );
  };
};

HappyHourAd.propTypes = {
  title: PropTypes.string,
  promoDescription: PropTypes.string,
};

export default HappyHourAd;