import GithubIcon from "../icon/GithubIcon";
import LinkButton from "./LinkButton";
import LinkIcon from "../icon/LinkIcon";
import svg from "../assets/placeholder.svg";
import { Tags } from "./Tags";
import { useState } from "react";

export const Card = ({ props, className, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [pos, setPos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    return (
        <div
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative max-w-[25rem] w-[25rem] border text-black dark:text-gray-300 dark:border-[#4a5568] dark:hover:border-[#5f7889] transition-colors duration-200 rounded-xl overflow-hidden shadow-md bg-[#f5f9fc] dark:bg-gray-800 hover:shadow-lg ease-in-out ${className} cursor-pointer`}
        >
            {/* Fondo con efecto de luz */}
            {isHovered && (
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: `radial-gradient( 270px circle at ${pos.x}px ${pos.y}px, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02) 100%)`,
                    }}
                />
            )}

            {/* Contenido de la card */}
            <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2 tracking-wide">{props.title}</h3>
                <p className=" text-base">
                    {props.text.length > 50 ? `${props.text.substring(0, 50)} ...` : props.text}
                </p>
            </div>
            <div className="px-6 pb-1">
                <div className="flex flex-wrap gap-2 mb-4">
                    {props.tags.map((tag, index) => (
                        <Tags key={index} name={tag.name} className={tag.class} />
                    ))}
                </div>
            </div>
            <footer className="px-6 pb-4 flex justify-between gap-4">
                <LinkButton className="w-1/2" href={props.url}>
                    <GithubIcon width={18} height={18} />
                    Repo
                </LinkButton>
                <LinkButton href={"#"} className="w-1/2">
                    <LinkIcon width={18} height={18} />
                    Preview
                </LinkButton>
            </footer>
        </div>
    );
};
