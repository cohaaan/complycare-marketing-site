export const content = `
  <div class="rounded-xl border border-[#E4EDF5] bg-[#F2F6FA] p-6 mb-8 mt-2">
    <h3 class="font-display font-semibold text-[#2E4057] mb-3">Executive Summary</h3>
    <ul class="list-disc pl-5 space-y-2 text-sm text-[#4E6478]">
      <li><strong>Direct Answer:</strong> SNFs can cut discharge turnaround time by replacing manual communication (whiteboards/phone calls) with automated role orchestration.</li>
      <li><strong>The Core Problem:</strong> Beds sit empty because Environmental Services (EVS) and Maintenance teams aren't instantly notified when a nursing discharge order is finalized.</li>
      <li><strong>The Solution:</strong> Deploying real-time discharge turnover software synchronizes all departments on a single timeline, significantly reducing idle bed hours.</li>
      <li><a href="/solutions/discharge-turnover-software" class="font-semibold text-[#3DA882] hover:underline">Learn how ComplyCare automates discharge workflows</a>.</li>
    </ul>
  </div>

  <h2>Why does SNF bed turnover take so long?</h2>
  <p><strong>Answer:</strong> Bed turnover takes hours because the handoff between Nursing, EVS, and Maintenance relies on asynchronous communication like physical whiteboards, sticky notes, and unanswered phone calls.</p>

  <p>In most facilities, the clock on a discharge starts when the patient leaves the building. However, the clock for EVS to clean the room often doesn't start until a nurse physically walks down the hall to find them. This fragmented communication causes beds to sit idle for hours, costing facilities thousands in missed admission opportunities.</p>

  <h2>How much revenue is lost to idle bed times?</h2>
  <p><strong>Answer:</strong> On average, a facility loses between $200 and $400 for every admission delayed by a day due to an unready bed. Extrapolated across a year, this can amount to tens of thousands of dollars in lost census revenue.</p>
  
  <p>When hospital discharge planners call your admissions team, they need an answer immediately. If your team has to say "let me check if the room is clean," the hospital will often move on to the next facility on their list. Speed is a competitive advantage.</p>

  <h2>What is automated role orchestration in bed turnover?</h2>
  <p><strong>Answer:</strong> Automated role orchestration is software that instantly triggers push notifications to specific departments (like EVS and Maintenance) the exact moment a nursing discharge is logged.</p>
  
  <p>With <a href="/solutions/discharge-turnover-software" class="text-[#3DA882] hover:underline">ComplyCare's Discharge Turnover Software</a>, the sequence operates like a digital relay race. When nursing marks the patient as discharged on their tablet, EVS immediately receives a notification that the room is ready for terminal cleaning. Once EVS marks it clean, Maintenance is notified to do a quick pass. Finally, admissions is alerted that the bed is green and ready to be sold.</p>

  <div class="my-8 overflow-x-auto">
    <table class="w-full border-collapse rounded-lg border border-[#E4EDF5] text-sm text-left">
      <thead class="bg-[#F2F6FA] text-[#2E4057]">
        <tr>
          <th class="border-b border-[#E4EDF5] px-4 py-3 font-semibold">Workflow Step</th>
          <th class="border-b border-[#E4EDF5] px-4 py-3 font-semibold">The Old Way (Whiteboards)</th>
          <th class="border-b border-[#E4EDF5] px-4 py-3 font-semibold">The New Way (Orchestrator)</th>
        </tr>
      </thead>
      <tbody class="text-[#4E6478]">
        <tr>
          <td class="border-b border-[#E4EDF5] px-4 py-3">1. Patient Leaves</td>
          <td class="border-b border-[#E4EDF5] px-4 py-3">Nurse writes 'D/C' on whiteboard.</td>
          <td class="border-b border-[#E4EDF5] px-4 py-3">Nurse taps 'Discharged'. EVS pinged instantly.</td>
        </tr>
        <tr>
          <td class="border-b border-[#E4EDF5] px-4 py-3">2. Room Cleaning</td>
          <td class="border-b border-[#E4EDF5] px-4 py-3">EVS sees the board 2 hours later.</td>
          <td class="border-b border-[#E4EDF5] px-4 py-3">Cleaning completed within 45 minutes of alert.</td>
        </tr>
        <tr>
          <td class="border-b border-[#E4EDF5] px-4 py-3">3. Bed Ready</td>
          <td class="border-b border-[#E4EDF5] px-4 py-3">Admissions physically checks the room.</td>
          <td class="border-b border-[#E4EDF5] px-4 py-3">Admissions dashboard turns green instantly.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2>How can my facility implement this?</h2>
  <p><strong>Answer:</strong> You can implement automated orchestration by transitioning from disconnected EHR modules to an operational engine built specifically for post-acute workflows.</p>

  <p>Replacing the whiteboard doesn't require overhauling your entire medical record system. Facilities currently using ComplyCare see an average 42% reduction in discharge-to-bed-ready times within the first thirty days of deployment simply by getting everyone on the same digital clock.</p>
`;
