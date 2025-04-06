/**
 * Individual Slide
 */

const renderJSX = (jsxString) => {
  // You can use eval() to render JSX (dangerous if input is not sanitized)
  return eval(`(function() { return (<>${jsxString}</>); })()`);
};

export const SlidePage: React.FC<{
  slide: SlideContent;
}> = ({ slide }) => {
  return (
    <div className="project-slide">
      {/**
       *  Text container
       */}
      <div className="slide-text-container">
        {/* Text container title */}
        <h3>{slide.title}</h3>

        <div dangerouslySetInnerHTML={{ __html: slide.text }} />
      </div>

      {/**
       * Video or screenshot embedded
       */}

       <h4>{slide.contentTag}</h4>

      <div
        onClick={() => {
          // Create a new window
          const newWindow = window.open("", "_blank", "width=800,height=600");

          // Add the image to the new window
          newWindow.document.write(`
      <html>
        <head>
          <title>Fullscreen Image</title>
          <style>
            body {
              margin: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
            }
            img {
              max-width: 100%;
              max-height: 100%;
              object-fit: contain;
            }
          </style>
        </head>
        <body>
          <img src="${slide.contentSrc}" alt="Fullscreen Image">
        </body>
      </html>
    `);
          newWindow.document.close(); // Close the document to render the content
        }}
        className="slide-content-container"
        dangerouslySetInnerHTML={{ __html: slide.content }}
      />
    </div>
  );
};
