(function () 
{
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');
  if (!toggle || !nav) return;

  // backdrop
  var backdrop = document.createElement('div');
  backdrop.className = 'nav-backdrop';
  document.body.appendChild(backdrop);

  function setOpen(open) 
  {
    nav.classList.toggle('is-open', open);
    backdrop.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  toggle.addEventListener('click', function () {setOpen(!nav.classList.contains('is-open'));});

  // close when the backdrop or a link is tapped
  backdrop.addEventListener('click', function () { setOpen(false); });
  nav.addEventListener('click', function (e) {if (e.target.closest('a')) setOpen(false);});

  // close on Escape, return focus to the button
  document.addEventListener('keydown', function (e) 
  {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) 
    {
      setOpen(false);
      toggle.focus();
    }
  }
);
})();