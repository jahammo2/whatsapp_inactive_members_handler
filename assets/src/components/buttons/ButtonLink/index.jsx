import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import React from 'react';

import * as basePropTypes from 'src/constants/propTypes/base';

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

function getButtonClassNames({ isSecondary }) {
  return cx({
    Button : true,
    isSecondary,
  });
}

function ButtonLink(props) {
  const { text, to, withArrow } = props;

  return (
    <div className={ styles.Root }>
      <Link className={ styles.Link } to={ to }>
        <div className={ getButtonClassNames(props) }>
          { text }

          <If condition={ withArrow }>
            <i className="fas fa-long-arrow-alt-right" />
          </If>
        </div>
      </Link>
    </div>
  );
}

ButtonLink.propTypes = {
  text      : basePropTypes.text.isRequired,
  to        : basePropTypes.to.isRequired,
  withArrow : basePropTypes.withArrow,
};

export default ButtonLink;
