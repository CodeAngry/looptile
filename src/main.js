// Prevent default drag behaviors to stop the browser from opening the image in a new tab
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName =>
{
	document.body.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults (e)
{
	e.preventDefault();
	e.stopPropagation();
}

// Handle the dropped files
document.body.addEventListener('drop', handleDrop, false);

function handleDrop (e)
{
	const dt = e.dataTransfer;
	const files = dt.files;

	if (files.length == 1)
	{
		const file = files[0];

		// Ensure the dropped item is an image
		if (file.type.startsWith('image/'))
		{
			const reader = new FileReader();

			reader.onload = function (event)
			{
				// Set the read Data URL as the background image of the body
				document.body.style.backgroundImage = `url('${event.target.result}')`;
			};

			reader.readAsDataURL(file);
		}
	}
}
