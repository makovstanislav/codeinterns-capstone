'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import styles from "../../styles/transfer.module.css";

export default function Transfer() {
    const router = useRouter();
    const [countdown, setCountdown] = useState(5); // Initialize countdown at 3 seconds

    useEffect(() => {
        // If countdown reaches 0, redirect the user
        if (countdown === 0) {
            router.push('/candidates'); // Redirect to the desired path
            return;
        }

        // Decrease the countdown every second
        const intervalId = setInterval(() => {
            setCountdown((currentCountdown) => currentCountdown - 1);
        }, 1000);

        // Clear the interval on cleanup
        return () => clearInterval(intervalId);
    }, [countdown, router]);

    return (
        <div className={styles.transferPage}>
            <p className={styles.redirecting}>
                Redirecting to demo in {countdown} seconds...
            </p>
            <div className={styles.container}>
                <p className={styles.title}>
                    The page is getting a makeover. Hang tight!
                </p>
                <Image
                    className={styles.logo}
                    src="/transfer/construction.png"
                    alt="Under Construction Image"
                    width={208}
                    height={208}
                    layout="intrinsic"
                ></Image>
            </div>
        </div>
    )
}
