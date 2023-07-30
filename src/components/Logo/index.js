import PropTypes from "prop-types";
import "./style.scss";

const Logo = ({ size }) => (
    <div className="Logo">
        <svg
            width={size === "large" ? "196" : "101"}
            height={size === "large" ? "67" : "35"}
            viewBox="0 0 101 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M35.8119 33.5129C34.7561 33.5129 33.8433 33.2779 33.0736 32.8079C32.3039 32.3311 31.7079 31.6602 31.2856 30.7951C30.8633 29.9232 30.6521 28.8947 30.6521 27.7095C30.6521 26.5038 30.8599 25.4651 31.2754 24.5932C31.6977 23.7145 32.2903 23.0401 33.0532 22.5701C33.8229 22.1001 34.7356 21.8651 35.7914 21.8651C36.8609 21.8651 37.7736 22.1104 38.5297 22.6008C39.2926 23.0844 39.8716 23.786 40.2666 24.7056C40.6685 25.6251 40.8593 26.732 40.8388 28.0262H39.6127V27.6175C39.5787 26.1053 39.2381 24.9542 38.591 24.164C37.9439 23.3739 37.0175 22.9788 35.8119 22.9788C34.5654 22.9788 33.6015 23.3909 32.9204 24.2151C32.246 25.0325 31.9088 26.1905 31.9088 27.689C31.9088 29.174 32.246 30.3251 32.9204 31.1425C33.6015 31.9599 34.5585 32.3686 35.7914 32.3686C36.6429 32.3686 37.3853 32.1711 38.0188 31.776C38.6591 31.3741 39.1666 30.8019 39.5412 30.0595L40.6038 30.5295C40.1611 31.4831 39.5208 32.2187 38.683 32.7364C37.8451 33.2541 36.8881 33.5129 35.8119 33.5129ZM31.4593 28.0262V26.9636H40.1747V28.0262H31.4593Z"
                fill="url(#paint0_linear_56_57)"
            />
            <path
                d="M44.8659 33.2064L40.8607 22.1717H42.0766L45.4892 31.6023L48.8915 22.1717H50.1176L46.1124 33.2064H44.8659Z"
                fill="url(#paint1_linear_56_57)"
            />
            <path
                d="M55.2903 33.5129C54.2345 33.5129 53.3218 33.2779 52.5521 32.8079C51.7824 32.3311 51.1864 31.6602 50.764 30.7951C50.3417 29.9232 50.1306 28.8947 50.1306 27.7095C50.1306 26.5038 50.3383 25.4651 50.7538 24.5932C51.1761 23.7145 51.7687 23.0401 52.5316 22.5701C53.3014 22.1001 54.2141 21.8651 55.2699 21.8651C56.3393 21.8651 57.2521 22.1104 58.0082 22.6008C58.7711 23.0844 59.35 23.786 59.7451 24.7056C60.147 25.6251 60.3377 26.732 60.3173 28.0262H59.0912V27.6175C59.0571 26.1053 58.7166 24.9542 58.0695 24.164C57.4224 23.3739 56.496 22.9788 55.2903 22.9788C54.0438 22.9788 53.08 23.3909 52.3988 24.2151C51.7245 25.0325 51.3873 26.1905 51.3873 27.689C51.3873 29.174 51.7245 30.3251 52.3988 31.1425C53.08 31.9599 54.037 32.3686 55.2699 32.3686C56.1213 32.3686 56.8638 32.1711 57.4973 31.776C58.1376 31.3741 58.645 30.8019 59.0197 30.0595L60.0823 30.5295C59.6395 31.4831 58.9992 32.2187 58.1614 32.7364C57.3236 33.2541 56.3666 33.5129 55.2903 33.5129ZM50.9377 28.0262V26.9636H59.6532V28.0262H50.9377Z"
                fill="url(#paint2_linear_56_57)"
            />
            <path
                d="M69.5426 33.2064V27.4643C69.5426 26.7695 69.4711 26.1496 69.328 25.6047C69.1918 25.0598 68.9807 24.5966 68.6946 24.2151C68.4153 23.8337 68.0611 23.5442 67.632 23.3467C67.2096 23.1491 66.709 23.0504 66.13 23.0504C65.5306 23.0504 65.0095 23.1559 64.5667 23.3671C64.1308 23.5714 63.7698 23.8609 63.4837 24.2356C63.2044 24.6102 62.9933 25.0564 62.8502 25.574C62.714 26.0849 62.6459 26.6435 62.6459 27.2497L61.7161 27.1373C61.7161 25.9453 61.917 24.9644 62.3189 24.1947C62.7276 23.4182 63.276 22.846 63.9639 22.4782C64.6519 22.1035 65.425 21.9162 66.2833 21.9162C66.8895 21.9162 67.431 22.0048 67.9078 22.1819C68.3915 22.359 68.8104 22.611 69.1646 22.938C69.5188 23.2581 69.8117 23.6396 70.0433 24.0823C70.2749 24.5182 70.4451 24.9985 70.5541 25.523C70.6699 26.0474 70.7278 26.5958 70.7278 27.168V33.2064H69.5426ZM61.4607 33.2064V22.1717H62.5335V24.6545H62.6459V33.2064H61.4607Z"
                fill="url(#paint3_linear_56_57)"
            />
            <path
                d="M78.4114 33.2064C77.8256 33.3358 77.2467 33.3835 76.6745 33.3495C76.1023 33.3222 75.5915 33.1962 75.1419 32.9714C74.6991 32.7398 74.3654 32.3856 74.1406 31.9088C73.9567 31.5206 73.8545 31.1289 73.8341 30.7338C73.8136 30.3387 73.8034 29.8858 73.8034 29.3749V19.1064H74.9886V29.3545C74.9886 29.8177 74.992 30.2025 74.9988 30.509C75.0125 30.8087 75.084 31.0846 75.2134 31.3366C75.4586 31.8066 75.8469 32.0927 76.3782 32.1949C76.9095 32.2903 77.5872 32.2732 78.4114 32.1438V33.2064ZM71.3308 23.2445V22.1717H78.4114V23.2445H71.3308Z"
                fill="url(#paint4_linear_56_57)"
            />
            <path
                d="M83.7786 33.4925C82.5048 33.4925 81.4524 33.2234 80.6214 32.6853C79.7972 32.1472 79.2864 31.3979 79.0888 30.4375L80.2945 30.2332C80.4648 30.8871 80.8666 31.4082 81.5001 31.7964C82.1336 32.1847 82.9101 32.3788 83.8297 32.3788C84.7424 32.3788 85.4679 32.1847 86.006 31.7964C86.5441 31.4082 86.8132 30.8769 86.8132 30.2025C86.8132 29.8347 86.728 29.535 86.5577 29.3034C86.3942 29.065 86.0673 28.847 85.5769 28.6495C85.0864 28.4519 84.3576 28.2203 83.3903 27.9547C82.3686 27.6822 81.5682 27.4098 80.9893 27.1373C80.4171 26.8648 80.0118 26.5549 79.7734 26.2075C79.5418 25.8601 79.426 25.4344 79.426 24.9303C79.426 24.3241 79.5997 23.7928 79.9471 23.3364C80.2945 22.8733 80.7781 22.5122 81.398 22.2534C82.0246 21.9946 82.7467 21.8651 83.564 21.8651C84.3814 21.8651 85.1171 22.0014 85.771 22.2738C86.4249 22.5395 86.9528 22.9141 87.3547 23.3977C87.7566 23.8746 87.9882 24.4297 88.0495 25.0632L86.8438 25.288C86.728 24.5796 86.3704 24.021 85.771 23.6123C85.1716 23.1968 84.4223 22.9856 83.5232 22.9788C82.6717 22.9652 81.9769 23.1355 81.4388 23.4897C80.9007 23.8371 80.6316 24.2969 80.6316 24.869C80.6316 25.196 80.7236 25.4753 80.9075 25.7069C81.0982 25.9317 81.432 26.1394 81.9088 26.3301C82.3856 26.5209 83.06 26.7252 83.9319 26.9432C84.9945 27.2156 85.8221 27.4949 86.4147 27.781C87.0141 28.0671 87.4364 28.4043 87.6816 28.7925C87.9269 29.174 88.0495 29.6474 88.0495 30.2127C88.0495 31.2345 87.668 32.0382 86.9051 32.624C86.149 33.203 85.1069 33.4925 83.7786 33.4925Z"
                fill="url(#paint5_linear_56_57)"
            />
            <path
                d="M17.5654 33.2065L28.1175 7.47857H14.6875V1.91577H34.4837V7.47857L23.9751 33.2065H17.5654Z"
                fill="url(#paint6_linear_56_57)"
            />
            <path
                d="M2.87786 33.2065L13.43 7.47857H0V1.91577H19.7962V7.47857L9.28762 33.2065H2.87786Z"
                fill="url(#paint7_linear_56_57)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_56_57"
                    x1="31.4312"
                    y1="28.0978"
                    x2="93.0547"
                    y2="27.4592"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#3300FF" />
                    <stop offset="1" stopColor="#3300FF" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_56_57"
                    x1="31.4312"
                    y1="28.0978"
                    x2="93.0547"
                    y2="27.4592"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#3300FF" />
                    <stop offset="1" stopColor="#3300FF" />
                </linearGradient>
                <linearGradient
                    id="paint2_linear_56_57"
                    x1="31.4312"
                    y1="28.0978"
                    x2="93.0547"
                    y2="27.4592"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#3300FF" />
                    <stop offset="1" stopColor="#3300FF" />
                </linearGradient>
                <linearGradient
                    id="paint3_linear_56_57"
                    x1="31.4312"
                    y1="28.0978"
                    x2="93.0547"
                    y2="27.4592"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#3300FF" />
                    <stop offset="1" stopColor="#3300FF" />
                </linearGradient>
                <linearGradient
                    id="paint4_linear_56_57"
                    x1="31.4312"
                    y1="28.0978"
                    x2="93.0547"
                    y2="27.4592"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#3300FF" />
                    <stop offset="1" stopColor="#3300FF" />
                </linearGradient>
                <linearGradient
                    id="paint5_linear_56_57"
                    x1="31.4312"
                    y1="28.0978"
                    x2="93.0547"
                    y2="27.4592"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#3300FF" />
                    <stop offset="1" stopColor="#3300FF" />
                </linearGradient>
                <linearGradient
                    id="paint6_linear_56_57"
                    x1="14.5386"
                    y1="17.3067"
                    x2="32.6182"
                    y2="17.3067"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#643EFF" />
                    <stop offset="1" stopColor="#A691FC" />
                </linearGradient>
                <linearGradient
                    id="paint7_linear_56_57"
                    x1="9.89808"
                    y1="1.91577"
                    x2="9.89808"
                    y2="33.2065"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#9278FE" />
                    <stop offset="1" stopColor="#613CFB" />
                </linearGradient>
            </defs>
        </svg>
    </div>
);

Logo.propTypes = {
    size: PropTypes.string,
}
Logo.defaultProps = {
    size: 'small'
}

export default Logo;