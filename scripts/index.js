const target = document.querySelector(".block");

class Cursor {
  constructor(el) {
    this.el = el;
    this.bind();
  }

  bind() {
    document.addEventListener("mousemove", this.move.bind(this), false);
  }

  move(e) {
    const cursorPosition = {
      left: e.clientX,
      top: e.clientY,
    };

    document.querySelectorAll(".block").forEach((single) => {
      const rect = single.getBoundingClientRect();

      // Calculate the dynamic trigger distance based on both width and height
      const triggerDistanceX = rect.width / 2; // Horizontal radius based on width
      const triggerDistanceY = rect.height / 2; // Vertical radius based on height

      const targetPosition = {
        left: rect.left + rect.width / 2,
        top: rect.top + rect.height / 2,
      };

      const distance = {
        x: targetPosition.left - cursorPosition.left,
        y: targetPosition.top - cursorPosition.top,
      };

      const angle = Math.atan2(distance.x, distance.y);

      const hypotenuse = Math.sqrt(
        distance.x * distance.x + distance.y * distance.y
      );

      // Check if the cursor is within the dynamic trigger distance based on both dimensions
      if (
        Math.abs(distance.x) < triggerDistanceX &&
        Math.abs(distance.y) < triggerDistanceY
      ) {
        TweenMax.killTweensOf(single.querySelector(".potion-wrapper"));
        TweenMax.to(single.querySelector(".potion-wrapper"), 0.3, {
          x: -((Math.sin(angle) * hypotenuse) / 1.3),
          y: -((Math.cos(angle) * hypotenuse) / 1.3),
        });
      } else {
        TweenMax.killTweensOf(single.querySelector(".potion-wrapper"));
        TweenMax.to(single.querySelector(".potion-wrapper"), 1, {
          x: 0,
          y: 0,
        });
      }
    });
  }
}

const cursor = new Cursor(target);

function setResponsiveCursor(size) {
  // update SVG with dynamic width and height
  const svg = `<svg height="${size}px" width="${size}px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-61.44 -61.44 634.88 634.88" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#343434;" d="M498.897,415.285l-263.84-263.84l-70.19,70.19l263.84,263.841l0.001,0.001 c8.581,8.581,31.251-0.174,50.633-19.556S507.479,423.868,498.897,415.285L498.897,415.285z"></path> <path style="fill:#D9D9D9;" d="M39.945,96.714l124.921,124.921c8.581,8.581,31.251-0.174,50.633-19.556s28.138-42.052,19.556-50.633 L110.136,26.525L39.945,96.714z"></path> <path style="opacity:0.1;enable-background:new ;" d="M456.517,457.668L456.517,457.668L67.755,68.906L39.946,96.714 l388.761,388.762l0.001,0.001c8.581,8.581,31.251-0.174,50.633-19.556c4.941-4.941,9.187-10.094,12.635-15.174 C477.128,460.826,462.912,464.062,456.517,457.668z"></path> <ellipse transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 84.5226 158.2368)" style="fill:#E6E6E6;" cx="75.033" cy="61.613" rx="21.975" ry="49.631"></ellipse> <path d="M254.103,74.775l-4.78,4.781c-3.84,3.84-3.84,10.065,0.001,13.904c3.739,3.737,10.086,3.816,13.904-0.001l4.778-4.78 c0,0,4.78,4.78,4.781,4.781c3.739,3.739,10.088,3.815,13.905,0c3.84-3.841,3.84-10.065,0-13.905l-4.781-4.781l4.78-4.778 c3.841-3.84,3.841-10.065,0.001-13.904c-3.84-3.841-10.065-3.84-13.904-0.001l-4.781,4.78l-4.78-4.78 c-3.841-3.838-10.065-3.838-13.905,0c-3.84,3.841-3.84,10.065,0,13.905L254.103,74.775z"></path> <path d="M40.249,165.594c-3.841-3.838-10.065-3.838-13.905,0l-4.78,4.78l-4.781-4.78c-3.838-3.838-10.064-3.84-13.904,0.001 c-3.84,3.84-3.84,10.065,0.001,13.904l4.78,4.78l-4.78,4.78c-3.841,3.84-3.841,10.065-0.001,13.904 c3.76,3.76,10.101,3.804,13.904,0.001l4.781-4.78c0,0,4.778,4.778,4.78,4.78c3.754,3.754,10.111,3.793,13.905,0 c3.84-3.841,3.84-10.065,0-13.905l-4.78-4.78l4.78-4.78C44.089,175.66,44.089,169.435,40.249,165.594z"></path> <path d="M154.766,286.291c-3.841-3.838-10.065-3.838-13.905,0l-4.78,4.78l-4.78-4.78c-3.841-3.838-10.065-3.838-13.905,0 c-3.84,3.841-3.84,10.065,0,13.905l4.78,4.78l-4.78,4.78c-3.84,3.841-3.84,10.065,0,13.905c3.694,3.695,10.065,3.837,13.905,0 l4.78-4.78c0,0,4.777,4.777,4.78,4.78c3.69,3.69,10.074,3.828,13.905,0c3.84-3.841,3.84-10.065,0-13.905l-4.78-4.78l4.78-4.78 C158.605,296.357,158.605,290.132,154.766,286.291z"></path> <path d="M505.851,408.348l-48.814-48.814c-3.841-3.838-10.065-3.838-13.905,0c-3.84,3.841-3.84,10.065,0,13.905l48.814,48.814 c0.298,0.298,1.281,3.545-1.51,10.772c-3.165,8.192-9.741,17.653-18.046,25.956c-8.303,8.305-17.764,14.882-25.956,18.046 c-7.227,2.788-10.477,1.809-10.773,1.509L188.957,231.833c0.693-0.254,1.392-0.526,2.095-0.813c0.114-0.046,0.229-0.1,0.345-0.147 c11.779-4.87,22.098-12.869,31.059-21.83c9.386-9.386,17.755-20.289,22.514-32.788c0.089-0.236,0.187-0.473,0.274-0.708 l170.081,170.081c3.841,3.838,10.065,3.838,13.905,0c3.84-3.841,3.84-10.065,0-13.905l-187.19-187.187 c-0.01-0.01-0.018-0.021-0.029-0.031c0,0-124.921-124.921-124.942-124.941c-2.822-2.813-7.918-6.155-16.207-6.155 c-13.927,0-32.44,9.859-48.313,25.731C42.226,49.463,34.241,61.104,30.066,71.918c-6.99,18.099-1.167,27.667,2.926,31.762 c0.01,0.01,0.022,0.021,0.033,0.031l65.693,65.695c3.841,3.838,10.065,3.838,13.905,0c3.84-3.841,3.84-10.065,0-13.905 l-48.587-48.59c9.681-3.546,20.208-10.269,30.381-19.786c0.073-0.069,0.148-0.138,0.222-0.207 c10.761-10.11,20.557-22.292,25.682-36.293c0,0,107.771,107.771,107.785,107.786c0.13,0.13,0.391,0.825,0.41,2.17 c0.184,12.858-11.486,26.076-19.967,34.557c-8.255,8.258-18.13,16.2-29.609,19.248c-4.689,1.244-6.877,0.549-7.133,0.298 l-31.372-31.373c-3.84-3.84-10.065-3.841-13.904-0.001c-3.841,3.84-3.841,10.065-0.001,13.904l31.386,31.388l263.841,263.841 c4.156,4.154,9.743,6.147,16.217,6.147c13.837,0,31.723-9.107,48.321-25.703C510.658,448.521,518.883,421.38,505.851,408.348z M48.409,79.002c3.165-8.192,9.742-17.653,18.046-25.956c13.72-13.721,27.455-19.972,34.407-19.972c0.648,0,1.331,0.037,1.949,0.244 c0.589,0.195,0.648,0.823,0.718,1.38c0.194,1.552,0.047,4.63-1.859,9.565c-2.967,7.679-8.933,16.476-16.509,24.386 c-8.929,9.323-22.041,21.329-35.75,21.533c-0.768,0.012-1.757,0.035-2.448-0.362c-0.026-0.016-0.052-0.031-0.067-0.046 C46.602,89.478,45.618,86.229,48.409,79.002z"></path> </g></svg>`;

  // Convert the SVG into a Base64 data URL
  const dataUrl = `data:image/svg+xml;base64,${btoa(svg)}`;

  // Set the cursor dynamically
  document.body.style.cursor = `url(${dataUrl}) ${size / 20} ${
    size / 20
  }, auto`;
}

window.addEventListener("mousemove", () => {
  const newSize = Math.min(90, Math.max(50, window.innerWidth / 10)); // Scale the size based on screen width
  setResponsiveCursor(newSize);
  console.log(newSize);
});
