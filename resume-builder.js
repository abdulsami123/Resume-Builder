// Work Experience Section
document.getElementById('add-experience-btn').addEventListener('click', function() {
    const container = document.getElementById('work-experience-container');
    const uniqueId = `exp-${Date.now()}`;
  
    const experienceDiv = document.createElement('div');
    experienceDiv.className = 'border p-3 mb-3 rounded bg-white dynamic-entry';
    experienceDiv.innerHTML = `
        <div class="experience-header d-flex justify-content-between align-items-center mb-2">
            <div class="header-content">
                <button class="btn btn-link text-decoration-none p-0" type="button" 
                        data-bs-toggle="collapse" data-bs-target="#${uniqueId}" 
                        aria-expanded="true" aria-controls="${uniqueId}">
                    <span class="summary-text fw-bold"></span>
                    <i class="fas fa-chevron-down ms-2"></i>
                </button>
            </div>
            <button type="button" class="btn btn-danger btn-sm remove-experience-btn">Remove</button>
        </div>
        <div class="collapse show" id="${uniqueId}">
            <div class="experience-content">
                <div class="mb-3">
                    <label class="form-label">Job Title</label>
                    <input type="text" class="form-control job-title" name="job_title[]" placeholder="Enter job title">
                </div>
                <div class="mb-3">
                    <label class="form-label">Company Name</label>
                    <input type="text" class="form-control company-name" name="company_name[]" placeholder="Enter company name">
                </div>
                ${createDateDropdowns()}
            </div>
            <div class="mb-3">
              <label class="form-label">Job Description</label>
              <textarea class="form-control job-description" name="job_description[]" rows="4" placeholder="Enter job responsibilities, achievements, and details"></textarea>
          </div>
        </div>
    `;
  
    container.appendChild(experienceDiv);
    setupCollapseBehavior(experienceDiv, uniqueId);
    setupRemoveButton(experienceDiv);
    setupAutoSummary(experienceDiv, 'job');
  });
  
  // Education Section
  document.getElementById('add-education-btn').addEventListener('click', function() {
    const container = document.getElementById('education-container');
    const uniqueId = `edu-${Date.now()}`;
  
    const educationDiv = document.createElement('div');
    educationDiv.className = 'border p-3 mb-3 rounded bg-white dynamic-entry';
    educationDiv.innerHTML = `
        <div class="experience-header d-flex justify-content-between align-items-center mb-2">
            <div class="header-content">
                <button class="btn btn-link text-decoration-none p-0" type="button" 
                        data-bs-toggle="collapse" data-bs-target="#${uniqueId}"
                        aria-expanded="true" aria-controls="${uniqueId}">
                    <span class="summary-text fw-bold"></span>
                    <i class="fas fa-chevron-down ms-2"></i>
                </button>
            </div>
            <button type="button" class="btn btn-danger btn-sm remove-experience-btn">Remove</button>
        </div>
        <div class="collapse show" id="${uniqueId}">
            <div class="experience-content">
                <div class="mb-3">
                    <label class="form-label">Degree Title</label>
                    <input type="text" class="form-control degree-title" name="degree_title[]" placeholder="Enter degree title">
                </div>
                <div class="mb-3">
                    <label class="form-label">Institution Name</label>
                    <input type="text" class="form-control institution-name" name="institution_name[]" placeholder="Enter institution name">
                </div>
                ${createDateDropdowns()}
            </div>
            <div class="mb-3">
              <label class="form-label">Relevant Coursework</label>
              <textarea class="form-control relevant-Coursework" name="relevant_Coursework[]" rows="4" placeholder="Enter Relevant Coursework"></textarea>
          </div>
        </div>
    `;
  
    container.appendChild(educationDiv);
    setupCollapseBehavior(educationDiv, uniqueId);
    setupRemoveButton(educationDiv);
    setupAutoSummary(educationDiv, 'education');
  });
  
  // Project Experience Section
  document.getElementById('add-project-btn').addEventListener('click', function() {
    const container = document.getElementById('project-container');
    const uniqueId = `proj-${Date.now()}`;
  
    const projectDiv = document.createElement('div');
    projectDiv.className = 'border p-3 mb-3 rounded bg-white dynamic-entry';
    projectDiv.innerHTML = `
        <div class="experience-header d-flex justify-content-between align-items-center mb-2">
            <div class="header-content">
                <button class="btn btn-link text-decoration-none p-0" type="button" 
                        data-bs-toggle="collapse" data-bs-target="#${uniqueId}"
                        aria-expanded="true" aria-controls="${uniqueId}">
                    <span class="summary-text fw-bold"></span>
                    <i class="fas fa-chevron-down ms-2"></i>
                </button>
            </div>
            <button type="button" class="btn btn-danger btn-sm remove-experience-btn">Remove</button>
        </div>
        <div class="collapse show" id="${uniqueId}">
            <div class="experience-content">
                <div class="mb-3">
                    <label class="form-label">Project Title</label>
                    <input type="text" class="form-control project-title" name="project_title[]" placeholder="Enter project title">
                </div>
                ${createDateDropdowns()}
            </div>
            <div class="mb-3">
              <label class="form-label">Project Description</label>
              <textarea class="form-control project-description" name="project_description[]" rows="4" placeholder="Enter project details, technologies used, and achievements"></textarea>
          </div>
        </div>
    `;
  
    container.appendChild(projectDiv);
    setupCollapseBehavior(projectDiv, uniqueId);
    setupRemoveButton(projectDiv);
    setupAutoSummary(projectDiv, 'project');
  });
  
  // Shared Functions
  function createDateDropdowns() {
    return `
    <div class="row date-fields">
        <div class="col-md-6 mb-3">
            <label class="form-label">Start Date</label>
            <div class="row">
                <div class="col-md-6 mb-3">
                    <select class="form-select start-month" name="start_month[]">
                        ${generateMonthOptions()}
                    </select>
                </div>
                <div class="col-md-6 mb-3">
                    <select class="form-select start-year" name="start_year[]">
                        ${generateYearOptions()}
                    </select>
                </div>
            </div>
        </div>
        <div class="col-md-6 mb-3">
            <label class="form-label">End Date</label>
            <div class="row">
                <div class="col-md-6 mb-3">
                    <select class="form-select end-month" name="end_month[]">
                        ${generateMonthOptions()}
                    </select>
                </div>
                <div class="col-md-6 mb-3">
                    <select class="form-select end-year" name="end_year[]">
                        ${generateYearOptions()}
                    </select>
                </div>
            </div>
        </div>
    </div>`;
  }
  
  function setupCollapseBehavior(container, uniqueId) {
    const collapseEl = container.querySelector(`#${uniqueId}`);
    const chevron = container.querySelector('.fa-chevron-down');
    
    collapseEl.addEventListener('show.bs.collapse', () => {
      chevron.classList.remove('fa-chevron-down');
      chevron.classList.add('fa-chevron-up');
    });
  
    collapseEl.addEventListener('hide.bs.collapse', () => {
      chevron.classList.remove('fa-chevron-up');
      chevron.classList.add('fa-chevron-down');
    });
  }
  
  function setupRemoveButton(container) {
    container.querySelector('.remove-experience-btn').addEventListener('click', function() {
      container.remove();
    });
  }
  
  function setupAutoSummary(container, type) {
    const updateSummary = () => {
      const summaryText = container.querySelector('.summary-text');
      const getValue = selector => container.querySelector(selector)?.value || '';
      
      let title, organization;
      
      switch(type) {
        case 'job':
          title = getValue('.job-title');
          organization = getValue('.company-name');
          break;
        case 'education':
          title = getValue('.degree-title');
          organization = getValue('.institution-name');
          break;
        case 'project':
          title = getValue('.project-title');
          organization = '';
          break;
      }
  
      const startMonth = getValue('.start-month');
      const startYear = getValue('.start-year');
      const endMonth = getValue('.end-month');
      const endYear = getValue('.end-year');
  
      const startDate = [startMonth, startYear].filter(Boolean).join('/');
      const endDate = [endMonth, endYear].filter(Boolean).join('/');
      const dateRange = [startDate, endDate].filter(Boolean).join(' - ');
  
      summaryText.textContent = [
        title || 'Untitled',
        organization && `at ${organization}`,
        dateRange && `(${dateRange})`
      ].filter(Boolean).join(' ');
    };
  
    container.querySelectorAll('input, select').forEach(element => {
      element.addEventListener('input', updateSummary);
      element.addEventListener('change', updateSummary);
    });
  
    updateSummary();
  }
  
  function generateMonthOptions() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return '<option value="">Month</option>' + 
      months.map((month, index) => 
        `<option value="${String(index + 1).padStart(2, '0')}">${month}</option>`
      ).join('');
  }
  
  function generateYearOptions() {
    const currentYear = new Date().getFullYear();
    let options = '<option value="">Year</option>';
    for (let year = currentYear; year >= 1950; year--) {
      options += `<option value="${year}">${year}</option>`;
    }
    return options;
  }
  
  function generateSectionPreview(containerId, title, itemTemplate) {
    const container = document.getElementById(containerId);
    const items = Array.from(container.children).filter(el => el.classList.contains('dynamic-entry'));
    
    if (items.length === 0) return '';
  
    return `
      <section class="mb-5">
        <h3 class="section-title border-bottom pb-2">${title}</h3>
        ${items.map(item => {
          const getValue = selector => item.querySelector(selector)?.value || '';
          
          const data = {
            // Education
            degree: getValue('.degree-title'),
            institution: getValue('.institution-name'),
            coursework: getValue('.relevant-Coursework'),
            
            // Work Experience
            position: getValue('.job-title'),
            company: getValue('.company-name'),
            description: getValue('.job-description'),
            
            // Projects
            title: getValue('.project-title'),
            description: getValue('.project-description'),
            
            // Dates for all sections
            dates: formatDates(
              getValue('.start-month'),
              getValue('.start-year'),
              getValue('.end-month'),
              getValue('.end-year')
            )
          };
          
          return itemTemplate(data);
        }).join('')}
      </section>
    `;
  }
  
  function formatDates(startMonth, startYear, endMonth, endYear) {
    if (!startYear && !endYear) return '';
    
    const formatDate = (month, year) => {
      if (!year) return '';
      if (!month) return year;
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return `${months[parseInt(month) - 1]} ${year}`;
    };
  
    const start = formatDate(startMonth, startYear);
    const end = endYear ? formatDate(endMonth, endYear) : 'Present';
    
    return `${start} - ${end}`;
  }
  
  // Form submission handler
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (!document.getElementById('full_name').value || !document.getElementById('email').value) {
        alert('Please fill in required fields (Name and Email)');
        return;
    }
  
    const previewHTML = `
      <div class="card p-4 mb-4">
        <h1 class="text-center mb-4">${document.getElementById('full_name').value}</h1>
        <div class="contact-info text-center mb-4">
          <p>📧 ${document.getElementById('email').value}</p>
          ${document.getElementById('phone').value ? `<p>📱 ${document.getElementById('phone').value}</p>` : ''}
        </div>
  
        ${generateSectionPreview('education-container', 'Education', edu => `
          <div class="mb-4">
            <h4>${edu.degree || 'Degree Not Specified'}</h4>
            <p>${edu.institution || ''}</p>
            ${edu.dates ? `<p class="text-muted">${edu.dates}</p>` : ''}
            ${edu.coursework ? `<p class="text-muted">${edu.coursework}</p>` : ''}
          </div>
        `)}
  
        ${generateSectionPreview('work-experience-container', 'Work Experience', work => `
          <div class="mb-4">
            <h4>${work.position || 'Position Not Specified'}</h4>
            <p>${work.company || ''}</p>
            ${work.dates ? `<p class="text-muted">${work.dates}</p>` : ''}
            ${work.description ? `<div class="description">${work.description}</div>` : ''}
          </div>
        `)}
  
        ${generateSectionPreview('project-container', 'Projects', project => `
          <div class="mb-4">
            <h4>${project.title || 'Project Title Not Specified'}</h4>
            ${project.dates ? `<p class="text-muted">${project.dates}</p>` : ''}
            ${project.description ? `<div class="description">${project.description}</div>` : ''}
          </div>
        `)}
      </div>
    `;
  
    document.getElementById('resume-preview').innerHTML = previewHTML;
    // Add download button with specific class
    const downloadBtn = document.createElement('button');
    downloadBtn.className = 'btn btn-success mt-3 download-pdf-btn';
    downloadBtn.innerHTML = '<i class="fas fa-download me-2"></i>Download PDF';
    downloadBtn.onclick = generatePDF;
    
    document.getElementById('resume-preview').appendChild(downloadBtn); 

});

// Add this function at the bottom of your JS file
// In your generatePDF function:
function generatePDF() {
    const previewContent = document.getElementById('resume-preview');
    
    // Create temporary PDF version
    const pdfVersion = previewContent.cloneNode(true);
    pdfVersion.classList.add('pdf-page'); // Add PDF dimension class
    pdfVersion.querySelector('.download-pdf-btn')?.remove();
    
    // Add to hidden container
    const hiddenContainer = document.createElement('div');
    hiddenContainer.style.position = 'fixed';
    hiddenContainer.style.left = '-9999px';
    hiddenContainer.appendChild(pdfVersion);
    document.body.appendChild(hiddenContainer);

    html2canvas(pdfVersion, {
        scale: 2,
        useCORS: true,
        windowWidth: 210 * 11.81, // Convert 210mm to pixels (1mm ≈ 11.81px)
        windowHeight: 297 * 11.81
    }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jspdf.jsPDF({
            unit: 'mm',
            format: 'a4',
            hotfixes: ["px_scaling"]
        });

        pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);
        document.body.removeChild(hiddenContainer);
        pdf.save('resume.pdf');
    });
}