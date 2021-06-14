import styled from 'styled-components'

const Wrapper = styled.div`
    transform: translate(0,0);
    z-index: 2;
    display: grid;
    align-self: center;
    position: absolute;
    transform: translate(2vw,-5vh);
    row-gap: 4vh;
    @media screen and (max-aspect-ratio:5/3){
    transform: translate(24vw,-5vh);
}
`
Wrapper.A = styled.a`
    #logo{
        transition: 0.2s;
    }
    &:hover #logo{
    fill:  ${({ theme }) => theme.colors.primary};
  }
`
export default function Contacts() {
  return (
    <Wrapper>
      <svg width="10vh" height="10vh" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Wrapper.A href="www.linkedin.com/in/gustavoleterio/">
          <g clip-path="url(#clip0)">
            <path id="logo" d="M60 0C26.8628 0 0 26.8628 0 60C0 93.1372 26.8628 120 60 120C93.1372 120 120 93.1372 120 60C120 26.8628 93.1372 0 60 0Z" fill="#000821" />
            <path d="M60 0C26.868 0 0 26.868 0 60C0 93.132 26.868 120 60 120C93.132 120 120 93.132 120 60C120 26.868 93.132 0 60 0ZM42.5647 90.7031H27.952V46.7404H42.5647V90.7031ZM35.2588 40.7373H35.1636C30.26 40.7373 27.0886 37.3618 27.0886 33.143C27.0886 28.829 30.3571 25.5469 35.3558 25.5469C40.3546 25.5469 43.4308 28.829 43.526 33.143C43.526 37.3618 40.3546 40.7373 35.2588 40.7373ZM95.2551 90.7031H80.6442V67.1841C80.6442 61.2735 78.5284 57.2424 73.2413 57.2424C69.2047 57.2424 66.8005 59.9615 65.744 62.5864C65.3577 63.5257 65.2634 64.8386 65.2634 66.1523V90.7031H50.6516C50.6516 90.7031 50.8429 50.8649 50.6516 46.7404H65.2634V52.9651C67.2052 49.9695 70.6796 45.7086 78.4323 45.7086C88.0463 45.7086 95.2551 51.9919 95.2551 65.495V90.7031Z" fill="#FAFAFA" />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="10vh" height="10vh" fill="white" />
            </clipPath>
          </defs>
        </Wrapper.A>
      </svg>

      <svg width="10vh" height="10vh" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Wrapper.A href="mailto:gustavoleterio@gmail.com">
          <g clip-path="url(#clip0)">
            <path id="logo" d="M60 0C26.8628 0 0 26.8628 0 60C0 93.1372 26.8628 120 60 120C93.1372 120 120 93.1372 120 60C120 26.8628 93.1372 0 60 0Z" fill="#000821" />
            <path d="M60 0C26.8628 0 0 26.8628 0 60C0 93.1372 26.8628 120 60 120C93.1372 120 120 93.1372 120 60C120 26.8628 93.1372 0 60 0ZM87.0317 33.3333L59.9778 54.7211L32.0439 33.3333H87.0317ZM89.815 86.6667H29.2594V42.3661L57.1728 63.5383C57.9211 64.1106 59.0283 64.3967 59.9211 64.3967C60.835 64.3967 61.6283 64.0967 62.385 63.4989L89.815 41.6789V86.6667Z" fill="#FAFAFA" />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="10vh" height="10vh" fill="white" />
            </clipPath>
          </defs>
        </Wrapper.A>
      </svg>
      <svg width="10vh" height="10vh" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Wrapper.A href="#">
          <g clip-path="url(#clip0)">
            <path id="logo" d="M60 0C26.8628 0 1 26.8628 1 60C1 93.1372 26.8628 120 60 120C93.1372 120 119 93.1372 119 60C119 26.8628 93.1372 0 60 0Z" fill="#000821" />
            <path d="M0 60.2512C0 26.9757 26.8634 0 60.0004 0C93.1366 0 120 26.9757 120 60.234C120 91.0262 96.9852 115.934 67.2988 119.562V72.8126H81.734L83.8992 55.9797H67.2988V45.2367C67.2988 40.3644 68.6401 37.0453 75.5972 37.0453L84.4717 37.0409V21.9877C82.9429 21.7857 77.6764 21.3272 71.5482 21.3272C58.7528 21.3272 49.9935 29.1751 49.9935 43.5765V55.9884H35.5197V72.8212H49.9935V119.16C21.6313 114.374 0 90.0954 0 60.2512Z" fill="#FAFAFA" />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="10vh" height="10vh" fill="white" />
            </clipPath>
          </defs>
        </Wrapper.A>
      </svg>
      <svg width="10vh" height="10vh" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Wrapper.A href="#">
          <g clip-path="url(#clip0)">
            <path id="logo" d="M60 0C26.8628 0 0 26.8628 0 60C0 93.1372 26.8628 120 60 120C93.1372 120 120 93.1372 120 60C120 26.8628 93.1372 0 60 0Z" fill="#000821" />
            <path d="M60 0C26.87 0 0 26.865 0 60C0 86.51 17.19 109 41.035 116.935C44.03 117.49 45 115.63 45 114.05V102.88C28.31 106.51 24.835 95.8 24.835 95.8C22.105 88.865 18.17 87.02 18.17 87.02C12.725 83.295 18.585 83.375 18.585 83.375C24.61 83.795 27.78 89.56 27.78 89.56C33.13 98.73 41.815 96.08 45.24 94.545C45.775 90.67 47.33 88.02 49.05 86.525C35.725 85 21.715 79.855 21.715 56.87C21.715 50.315 24.06 44.965 27.895 40.765C27.275 39.25 25.22 33.145 28.48 24.885C28.48 24.885 33.52 23.275 44.985 31.035C49.77 29.705 54.9 29.04 60 29.015C65.1 29.04 70.235 29.705 75.03 31.035C86.485 23.275 91.515 24.885 91.515 24.885C94.78 33.15 92.725 39.255 92.105 40.765C95.955 44.965 98.28 50.32 98.28 56.87C98.28 79.915 84.245 84.99 70.885 86.475C73.035 88.335 75 91.985 75 97.585V114.05C75 115.645 75.96 117.52 79.005 116.93C102.83 108.985 120 86.5 120 60C120 26.865 93.135 0 60 0Z" fill="#FAFAFA" />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="10vh" height="10vh" fill="white" />
            </clipPath>
          </defs>
        </Wrapper.A>
      </svg>
    </Wrapper >
  );
}