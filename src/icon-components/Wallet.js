import * as React from "react";
function SvgWallet(props) {
    return (
        <svg
            width={100}
            height={74}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clipPath="url(#wallet_svg__clip0_772_4945)" fill="#fff">
                <path d="M52.042 72.924c-10.772-.224-19.188-.293-27.595-.614-4.823-.183-9.642-.679-14.44-1.231a20.96 20.96 0 01-5.219-1.515C2.234 68.551.826 66.52.44 63.804a18.27 18.27 0 01-.224-2.943C.36 53.895.526 46.93.714 39.963c.157-5.98.331-11.96.522-17.938.11-3.367.198-6.74.462-10.096.357-4.547 2.483-7.854 7.027-9.218a19.682 19.682 0 013.872-.924C17.689 1.344 22.787.803 27.892.69 41.069.393 54.249.219 67.432.163c6.662-.1 13.323.302 19.926 1.2 2.077.309 4.132.746 6.155 1.31a6.85 6.85 0 013.265 1.843 6.892 6.892 0 011.814 3.291c.4 1.345.648 2.732.737 4.133.217 7.458.428 14.917.465 22.377.04 8.451-.357 16.892-2.095 25.19-.574 2.733-1.583 5.376-2.444 8.044-.546 1.695-1.917 2.524-3.49 3.09-3.068 1.104-6.27 1.495-9.493 1.616-10.859.408-21.716.964-30.23.667zm41.628-26.91a6.772 6.772 0 00-.901-.119c-4.97.264-9.94.709-14.912.757a175.69 175.69 0 01-15.119-.514c-4.256-.327-6.2-2.305-7.227-6.443-.813-3.28-.678-6.59-.142-9.856.692-4.21 2.44-5.906 6.7-6.719a77.93 77.93 0 0115.671-1.51c4.63.063 9.258.137 13.886.189.735.008 1.472-.076 2.473-.133-.223-3.813-.388-7.387-.656-10.953-.117-1.552-.938-2.578-2.61-2.81-3.257-.452-6.494-1.261-9.761-1.399-8.404-.356-16.82-.571-25.232-.572-9.748 0-19.497.26-29.243.466-2.938.062-5.876.253-8.804.502-2.16.184-4.31.519-6.454.858-3.115.494-4.717 2.656-5.344 5.488a32.226 32.226 0 00-.721 6.698c-.094 13.59-.096 27.18-.126 40.77 0 .494 0 .987.041 1.477.133 1.538.786 2.68 2.383 3.092.88.227 1.74.563 2.632.707 5.69.919 11.429 1.156 17.182 1.28 18.583.398 37.166.914 55.738-.401 2.381-.168 4.719-.441 6.812-1.407 2.49-6.31 3.384-12.747 3.734-19.449zm.266-19.776c-6.483.172-12.787.212-19.079.553-3.975.216-7.938.807-11.885 1.377-2.001.288-2.49.802-2.605 2.705a58.755 58.755 0 00-.007 7.579c.154 2.248.717 2.662 3.013 3.064.827.145 1.662.253 2.498.336 7.008.7 14.01.176 21.012-.082 2.355-.089 4.705-.33 6.987-.494.663-2.829.67-12.569.065-15.038z" />
                <path d="M69.937 30.019c2.694-.535 4.385 1.955 4.373 4.175-.013 2.514-1.83 4.348-4.385 4.4-2.69.053-5.049-2.008-4.986-4.358.065-2.47 2.14-4.219 4.998-4.217z" />
            </g>
            <defs>
                <clipPath id="wallet_svg__clip0_772_4945">
                    <path fill="#fff" d="M0 0h100v73.248H0z" />
                </clipPath>
            </defs>
        </svg>
    );
}
export default SvgWallet;