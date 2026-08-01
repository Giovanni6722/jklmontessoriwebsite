(function () 
{
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');
  if (!toggle || !nav) return;

  function setOpen(open) 
  {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  toggle.addEventListener('click', function () {setOpen(!nav.classList.contains('is-open'));});

  // close the menu when a link is tapped
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