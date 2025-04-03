document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', function() {
      const count = this.dataset.count;
      const tooltip = document.createElement('div');
      tooltip.classList.add('count-tooltip');
      this.appendChild(tooltip);
    });
    
    card.addEventListener('mouseout', function() {
      const tooltip = this.querySelector('.count-tooltip');
      if (tooltip) tooltip.remove();
    });
  });
  