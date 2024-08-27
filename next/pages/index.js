import * as React from 'react';
import styles from '../styles/Home.module.css';
import { animated, useSpring } from '@react-spring/web';

export default function Home() {
    const [x, setX] = React.useState(0);
    const [y, setY] = React.useState(0);
    const [springs, api] = useSpring(() => ({
        from: { x },
    }))

    const handleClick = () => {
        const signX = Math.random() < 0.5 ? -1 : 1;
        const newX = x + ((Math.random() * 100 + 50) * signX);
        const signY = Math.random() < 0.5 ? -1 : 1;
        const newY = x + ((Math.random() * 100 + 50) * signY);
        api.start({
            from: {
                x,
                y
            },
            to: {
                x: newX,
                y: newY,
            },
        })
        setX(newX);
        setY(newY);
    }

    return (
        <div className={styles.container}>
            <animated.div
                onClick={handleClick}
                style={{
                    width: 120,
                    cursor: 'pointer',
                    height: 120,
                    background: '#00410c',
                    borderRadius: 8,
                    ...springs,
                }}
            >
                <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    width: '100%',
                    height: '100%',
                }}>
                    <div style={{
                        width: 40,
                        cursor: 'pointer',
                        height: 40,
                        background: '#1e7216',
                        borderRadius: 8,
                    }}/>
                </div>
                <div style={{textAlign: 'center'}}>
                    Приветствую!
                </div>
            </animated.div>
        </div>
    );
}
