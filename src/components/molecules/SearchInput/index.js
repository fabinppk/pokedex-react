import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from '_molecules/SearchInput/index.module.scss';

const SearchInput = ({ value, placeholder, onChange, onFocus, onBlur, isDisabled, className }) => {
    return (
        <div className={style.blockSearchInput}>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <title>search</title>
                    <path d="M19 17l-5.15-5.15a7 7 0 1 0-2 2L17 19zM3.5 8A4.5 4.5 0 1 1 8 12.5 4.5 4.5 0 0 1 3.5 8z" />
                </svg>
                <input
                    id="SearchInput"
                    type="text"
                    name="searchInput"
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    disabled={isDisabled}
                    className={classNames(style.input, { [style.disabled]: isDisabled }, className)}
                />
            </div>
        </div>
    );
};

SearchInput.propTypes = {
    className: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    isDisabled: PropTypes.bool,
};

SearchInput.defaultProps = {
    className: undefined,
    value: undefined,
    placeholder: undefined,
    onFocus: () => {},
    onBlur: () => {},
    isDisabled: false,
};

export default SearchInput;
