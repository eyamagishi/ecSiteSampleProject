import React, { useEffect } from 'react';
import { initializeSlideshow } from '../slide';
import '../../css/slide.css';

const Mainimg: React.FC = () => {
    useEffect(() => {
        initializeSlideshow();
    }, []);

    return (
        <aside id="mainimg">
            <div className="slide slide1">
                <div>
                    <h1>挑戦を楽しむ。</h1>
                    <p>限界を超えて、前進。<br />
                        常に新しい挑戦を求め、未知の領域に挑む企業です。</p>
                    <p className="btn-border-radius"><a href="#">もっと詳しくみる</a></p>
                </div>
            </div>
            <div className="slide slide2">
                <div>
                    <h1>発想の転換。</h1>
                    <p>新しい視点で世界を捉え直す。<br />
                        革新を生むためのアイデアをここから発信します。</p>
                    <p className="btn-border-radius"><a href="#">もっと詳しくみる</a></p>
                </div>
            </div>
            <div className="slide slide3">
                <div>
                    <h1>次世代の扉を<br />
                        切り開こう</h1>
                    <p>あなたの手で開く未来。<br />
                        新しい技術で世界を変える一歩を踏み出そう！</p>
                    <p className="btn-border-radius"><a href="#">もっと詳しくみる</a></p>
                </div>
            </div>
        </aside>
    );
};

export default Mainimg;
