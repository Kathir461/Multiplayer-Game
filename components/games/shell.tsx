import { ArrowLeft, Users } from "lucide-react";
export function Header(){return <header className="topbar"><a href="/" className="brand" aria-label="Playground home"><span className="brand-symbol">#</span> playground<span className="brand-period">.</span></a><span className="mode"><Users size={15}/> TWO PLAYERS · ONE SCREEN</span></header>}
export function Back(){return <a className="back-link" href="/"><ArrowLeft size={16}/> All games</a>}
export function Footer(){return <footer><span>BUILT FOR A LITTLE FRIENDLY COMPETITION</span><span>Good games. Better company.</span></footer>}
