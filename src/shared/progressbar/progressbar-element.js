import styles from './progressbar.module.css';

const ProgressbarElement = ({ index, element, arrayLength, currentProgress }) => {
    // w 100/arr length
    return (
        <div className={`${styles.progressbar_element_wrapper}
        flex-wrap
          ${index > currentProgress - 1 ? 'max-md:!bg-[#BEC1C8]' : 'max-md:!bg-dark'} max-md:!left-0 max-md:!bottom-0 mb-2`}
            style={{ width: `${100 / arrayLength}%`, fontSize: '.75rem',minWidth:'5rem' }}>
            <div className={`${styles.progressbar_element} max-md:!static
             max-md:!text-light  `}
                style={{
                    textAlign: 'center',
                    left: index === 0 ? '40%' :
                        index === arrayLength - 1 ? '60%' :
                            '50%'
                }}>
                {element}
                <div className={`${styles.black_dot}
                 ${index > currentProgress - 1 ? 'bg-[#BEC1C8]' :
                        'bg-dark'} max-md:!hidden `}></div>
            </div>
        </div>
    );
}

export { ProgressbarElement };
