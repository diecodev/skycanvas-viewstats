import { SVGProps } from "react";

export const Moon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
  </svg>
);

export const Sun = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
      fillRule="evenodd"
      clipRule="evenodd"
    ></path>
  </svg>
);

export const Humidity = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M9.07998 9.375C8.94616 9.36987 8.81301 9.39624 8.69125 9.452C8.56949 9.50775 8.46253 9.59133 8.37898 9.696C8.20598 9.91 8.11899 10.181 8.11899 10.509C8.11899 10.839 8.20498 11.111 8.37698 11.323C8.54898 11.536 8.78299 11.642 9.07899 11.642C9.37799 11.642 9.61198 11.536 9.78298 11.325C9.95398 11.114 10.039 10.841 10.039 10.509C10.039 10.172 9.95399 9.899 9.78399 9.69C9.61598 9.479 9.38098 9.375 9.07998 9.375ZM9.07998 11.23C8.76598 11.23 8.60798 10.989 8.60798 10.507C8.60798 10.025 8.76498 9.784 9.07998 9.784C9.39398 9.784 9.55198 10.025 9.55198 10.507C9.55098 10.99 9.39398 11.23 9.07998 11.23ZM7.01198 8.18C7.18298 7.969 7.26798 7.696 7.26798 7.364C7.26798 7.027 7.18298 6.754 7.01398 6.545C6.84398 6.336 6.60898 6.231 6.30798 6.231C6.01398 6.231 5.77998 6.338 5.60698 6.552C5.43398 6.766 5.34698 7.037 5.34698 7.365C5.34698 7.695 5.43298 7.967 5.60498 8.179C5.77698 8.392 6.01098 8.498 6.30698 8.498C6.60598 8.498 6.84098 8.392 7.01198 8.18ZM5.83598 7.364C5.83598 6.882 5.99298 6.641 6.30798 6.641C6.62298 6.641 6.77998 6.882 6.77998 7.364C6.77998 7.846 6.62298 8.087 6.30798 8.087C5.99298 8.087 5.83598 7.846 5.83598 7.364ZM9.32198 6.273C9.25632 6.23317 9.17754 6.22102 9.10293 6.23921C9.02832 6.25739 8.96396 6.30443 8.92398 6.37L5.96898 11.201C5.94245 11.2449 5.92804 11.2951 5.92721 11.3463C5.92639 11.3976 5.93919 11.4482 5.9643 11.493C5.98941 11.5377 6.02593 11.575 6.07015 11.601C6.11437 11.627 6.16469 11.6408 6.21598 11.641C6.26568 11.6413 6.3146 11.6286 6.35791 11.6042C6.40123 11.5799 6.43744 11.5446 6.46298 11.502L9.41798 6.671C9.43788 6.63858 9.45118 6.60256 9.45712 6.56499C9.46307 6.52742 9.46153 6.48904 9.45261 6.45207C9.4437 6.41509 9.42757 6.38024 9.40515 6.34951C9.38273 6.31878 9.35447 6.29278 9.32198 6.273Z"
        fill="currentColor"
      />
      <path
        d="M7.69399 0.213989C7.69399 0.213989 2.50299 7.72599 2.50299 10.595C2.50299 13.464 4.82499 15.785 7.69399 15.785C10.563 15.785 12.885 13.464 12.885 10.595C12.885 7.72599 7.69399 0.213989 7.69399 0.213989ZM10.648 12.033C10.252 12.041 10.025 12.113 9.18299 12.384L9.06299 12.422C8.48699 12.652 8.00799 12.777 7.71699 12.777C7.22699 12.777 6.41899 12.439 6.41099 12.435L6.24699 12.381C5.36399 12.098 5.15399 12.031 4.80099 12.027C4.47899 12.027 4.15599 12.08 3.81599 12.187C3.59071 11.6751 3.47327 11.1223 3.47099 10.563C3.47099 8.98199 5.70699 4.97099 7.69199 1.90299C9.67699 4.97199 11.914 8.98399 11.914 10.563C11.914 11.108 11.799 11.652 11.572 12.181C11.2727 12.0873 10.9615 12.0375 10.648 12.033Z"
        fill="currentColor"
      />
    </svg>
  );
};
export const FeelsLike = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M2.4 11.3C2.56569 11.0791 2.52091 10.7657 2.3 10.6C2.07909 10.4343 1.76569 10.4791 1.6 10.7C1.23509 11.1866 1 11.8918 1 12.5C1 12.7882 1.14096 13.0213 1.25625 13.175C1.37163 13.3289 1.51814 13.4753 1.63484 13.592L1.64645 13.6036C1.77798 13.7351 1.87549 13.834 1.94375 13.925C1.9825 13.9767 1.99586 14.0055 1.99992 14.0152C1.99575 14.4045 1.83207 14.8906 1.6 15.2C1.43431 15.4209 1.47909 15.7343 1.7 15.9C1.92091 16.0657 2.23431 16.0209 2.4 15.8C2.76491 15.3135 3 14.6082 3 14C3 13.7119 2.85904 13.4788 2.74375 13.325C2.62837 13.1712 2.48186 13.0247 2.36516 12.9081L2.35355 12.8965C2.22202 12.7649 2.12451 12.666 2.05625 12.575C2.0175 12.5234 2.00414 12.4946 2.00008 12.4849C2.00425 12.0955 2.16793 11.6095 2.4 11.3Z"
        fill="currentColor"
      />
      <path
        d="M6.4 11.3C6.56569 11.0791 6.52091 10.7657 6.3 10.6C6.07909 10.4343 5.76569 10.4791 5.6 10.7C5.23509 11.1866 5 11.8918 5 12.5C5 12.7882 5.14096 13.0213 5.25625 13.175C5.37162 13.3289 5.51814 13.4753 5.63483 13.592L5.64645 13.6036C5.77798 13.7351 5.87549 13.834 5.94375 13.925C5.9825 13.9767 5.99586 14.0055 5.99992 14.0152C5.99575 14.4045 5.83207 14.8906 5.6 15.2C5.43431 15.4209 5.47909 15.7343 5.7 15.9C5.92091 16.0657 6.23431 16.0209 6.4 15.8C6.76491 15.3135 7 14.6082 7 14C7 13.7119 6.85904 13.4788 6.74375 13.325C6.62837 13.1712 6.48186 13.0247 6.36516 12.9081L6.35355 12.8965C6.22202 12.7649 6.12451 12.666 6.05625 12.575C6.0175 12.5234 6.00414 12.4946 6.00008 12.4849C6.00425 12.0955 6.16793 11.6095 6.4 11.3Z"
        fill="currentColor"
      />
      <path
        d="M10.3 10.6C10.5209 10.7657 10.5657 11.0791 10.4 11.3C10.1679 11.6095 10.0043 12.0955 10.0001 12.4849C10.0041 12.4946 10.0175 12.5234 10.0562 12.575C10.1245 12.666 10.222 12.7649 10.3536 12.8965L10.3652 12.9081C10.4819 13.0247 10.6284 13.1712 10.7437 13.325C10.859 13.4788 11 13.7119 11 14C11 14.6082 10.7649 15.3135 10.4 15.8C10.2343 16.0209 9.92091 16.0657 9.7 15.9C9.47909 15.7343 9.43431 15.4209 9.6 15.2C9.83207 14.8906 9.99575 14.4045 9.99992 14.0152C9.99586 14.0055 9.9825 13.9767 9.94375 13.925C9.87549 13.834 9.77798 13.7351 9.64645 13.6036L9.63484 13.592C9.51815 13.4753 9.37162 13.3289 9.25625 13.175C9.14096 13.0213 9 12.7882 9 12.5C9 11.8918 9.23509 11.1866 9.6 10.7C9.76569 10.4791 10.0791 10.4343 10.3 10.6Z"
        fill="currentColor"
      />
      <path
        d="M14.4 11.3C14.5657 11.0791 14.5209 10.7657 14.3 10.6C14.0791 10.4343 13.7657 10.4791 13.6 10.7C13.2351 11.1866 13 11.8918 13 12.5C13 12.7882 13.141 13.0213 13.2563 13.175C13.3716 13.3289 13.5181 13.4753 13.6348 13.592L13.6464 13.6036C13.778 13.7351 13.8755 13.834 13.9438 13.925C13.9825 13.9767 13.9959 14.0055 13.9999 14.0152C13.9957 14.4045 13.8321 14.8906 13.6 15.2C13.4343 15.4209 13.4791 15.7343 13.7 15.9C13.9209 16.0657 14.2343 16.0209 14.4 15.8C14.7649 15.3135 15 14.6082 15 14C15 13.7119 14.859 13.4788 14.7437 13.325C14.6284 13.1712 14.4819 13.0247 14.3652 12.9081L14.3536 12.8965C14.222 12.7649 14.1245 12.666 14.0562 12.575C14.0175 12.5234 14.0041 12.4946 14.0001 12.4849C14.0043 12.0955 14.1679 11.6095 14.4 11.3Z"
        fill="currentColor"
      />
      <path
        d="M8.00311 2.1875C7.44685 2.1875 6.90309 2.35245 6.44057 2.66149C5.97806 2.97053 5.61757 3.40979 5.4047 3.9237C5.19183 4.43762 5.13613 5.00312 5.24466 5.54869C5.35318 6.09426 5.62104 6.5954 6.01438 6.98874C6.40771 7.38207 6.90885 7.64994 7.45442 7.75846C7.99999 7.86698 8.56549 7.81128 9.07941 7.59841C9.59333 7.38554 10.0326 7.02505 10.3416 6.56254C10.6507 6.10003 10.8156 5.55626 10.8156 5C10.8156 4.25408 10.5193 3.53871 9.99185 3.01126C9.46441 2.48382 8.74904 2.1875 8.00311 2.1875Z"
        fill="currentColor"
      />
      <path
        d="M8.00564 1.56438C7.92273 1.56438 7.84322 1.53145 7.78459 1.47285C7.72596 1.41424 7.69303 1.33476 7.69303 1.25188V0.314377C7.69303 0.231497 7.72596 0.152011 7.78459 0.093406C7.84322 0.0348008 7.92273 0.00187683 8.00564 0.00187683C8.08855 0.00187683 8.16807 0.0348008 8.2267 0.093406C8.28532 0.152011 8.31826 0.231497 8.31826 0.314377V1.25188C8.31826 1.33476 8.28532 1.41424 8.2267 1.47285C8.16807 1.53145 8.08855 1.56438 8.00564 1.56438ZM5.35402 2.65938C5.31299 2.65935 5.27237 2.65123 5.2345 2.63546C5.19662 2.61969 5.16223 2.5966 5.13332 2.5675L4.46932 1.905C4.41237 1.84606 4.38086 1.76713 4.38157 1.68519C4.38229 1.60325 4.41516 1.52487 4.47313 1.46693C4.53109 1.40899 4.6095 1.37613 4.69146 1.37542C4.77343 1.3747 4.8524 1.4062 4.91136 1.46313L5.57598 2.125C5.61982 2.16871 5.64968 2.22444 5.66179 2.28513C5.6739 2.34583 5.66771 2.40875 5.644 2.46592C5.62029 2.52309 5.58014 2.57193 5.52862 2.60626C5.47711 2.6406 5.41656 2.65886 5.35465 2.65875L5.35402 2.65938ZM4.25236 5.30813H3.31451C3.2316 5.30813 3.15208 5.2752 3.09346 5.2166C3.03483 5.15799 3.00189 5.07851 3.00189 4.99563C3.00189 4.91275 3.03483 4.83326 3.09346 4.77466C3.15208 4.71605 3.2316 4.68313 3.31451 4.68313H4.25236C4.33527 4.68313 4.41479 4.71605 4.47341 4.77466C4.53204 4.83326 4.56498 4.91275 4.56498 4.99563C4.56498 5.07851 4.53204 5.15799 4.47341 5.2166C4.41479 5.2752 4.33527 5.30813 4.25236 5.30813ZM4.6844 8.6225C4.62249 8.62261 4.56194 8.60435 4.51042 8.57001C4.45891 8.53568 4.41876 8.48684 4.39505 8.42967C4.37134 8.3725 4.36515 8.30958 4.37726 8.24888C4.38937 8.18819 4.41923 8.13246 4.46307 8.08875L5.12706 7.42625C5.18602 7.36933 5.26499 7.33783 5.34696 7.33854C5.42893 7.33925 5.50733 7.37212 5.5653 7.43006C5.62326 7.488 5.65614 7.56638 5.65685 7.64831C5.65756 7.73025 5.62605 7.80919 5.56911 7.86813L4.90511 8.53063C4.87619 8.55972 4.8418 8.58282 4.80392 8.59858C4.76605 8.61435 4.72543 8.62248 4.6844 8.6225ZM7.99752 9.99813C7.9146 9.99813 7.83509 9.9652 7.77646 9.9066C7.71783 9.84799 7.6849 9.76851 7.6849 9.68563V8.74813C7.6849 8.66525 7.71783 8.58576 7.77646 8.52716C7.83509 8.46855 7.9146 8.43563 7.99752 8.43563C8.08043 8.43563 8.15994 8.46855 8.21857 8.52716C8.2772 8.58576 8.31013 8.66525 8.31013 8.74813V9.68563C8.31013 9.76851 8.2772 9.84799 8.21857 9.9066C8.15994 9.9652 8.08043 9.99813 7.99752 9.99813ZM11.3125 8.62875C11.2715 8.62873 11.2309 8.6206 11.193 8.60483C11.1551 8.58907 11.1207 8.56597 11.0918 8.53688L10.4291 7.87438C10.398 7.84587 10.3731 7.81139 10.3557 7.773C10.3384 7.73461 10.329 7.69311 10.3281 7.65099C10.3272 7.60887 10.3348 7.567 10.3505 7.52791C10.3662 7.48881 10.3896 7.45329 10.4194 7.42348C10.4492 7.39367 10.4847 7.37019 10.5238 7.35444C10.5628 7.3387 10.6047 7.33102 10.6469 7.33186C10.689 7.3327 10.7305 7.34205 10.7689 7.35935C10.8074 7.37664 10.8419 7.40153 10.8705 7.4325L11.5332 8.095C11.577 8.13867 11.6069 8.19435 11.619 8.25498C11.6311 8.31561 11.625 8.37848 11.6014 8.43563C11.5777 8.49277 11.5377 8.54163 11.4862 8.576C11.4348 8.61038 11.3744 8.62874 11.3125 8.62875ZM12.6893 5.31688H11.7514C11.6685 5.31688 11.589 5.28395 11.5304 5.22535C11.4717 5.16674 11.4388 5.08726 11.4388 5.00438C11.4388 4.9215 11.4717 4.84201 11.5304 4.78341C11.589 4.7248 11.6685 4.69188 11.7514 4.69188H12.6893C12.7722 4.69188 12.8517 4.7248 12.9103 4.78341C12.969 4.84201 13.0019 4.9215 13.0019 5.00438C13.0019 5.08726 12.969 5.16674 12.9103 5.22535C12.8517 5.28395 12.7722 5.31688 12.6893 5.31688ZM10.656 2.66563C10.5941 2.66574 10.5336 2.64747 10.482 2.61314C10.4305 2.57881 10.3904 2.52996 10.3667 2.47279C10.343 2.41562 10.3368 2.3527 10.3489 2.29201C10.361 2.23132 10.3908 2.17558 10.4347 2.13188L11.0974 1.46938C11.1265 1.44032 11.1609 1.41727 11.1989 1.40153C11.2368 1.38579 11.2775 1.37767 11.3185 1.37764C11.3596 1.37761 11.4003 1.38567 11.4383 1.40136C11.4762 1.41704 11.5107 1.44005 11.5398 1.46906C11.5688 1.49808 11.5919 1.53253 11.6077 1.57046C11.6234 1.60838 11.6315 1.64903 11.6316 1.69009C11.6316 1.73115 11.6235 1.77182 11.6078 1.80977C11.5921 1.84771 11.5691 1.8822 11.5401 1.91125L10.8773 2.57375C10.8484 2.60292 10.8139 2.62606 10.7759 2.64183C10.7379 2.6576 10.6971 2.66569 10.656 2.66563Z"
        fill="currentColor"
      />
    </svg>
  );
};
