export const content = `
  <div class="rounded-xl border border-[#E4EDF5] bg-[#F2F6FA] p-6 mb-8 mt-2">
    <h3 class="font-display font-semibold text-[#2E4057] mb-3">Executive Summary</h3>
    <ul class="list-disc pl-5 space-y-2 text-sm text-[#4E6478]">
      <li><strong>Direct Answer:</strong> The delay between a SNF discharge and a bed being "placement-ready" is primarily caused by asynchronous communication channels (whiteboards, phone tags) rather than slow cleaning times.</li>
      <li><strong>The Core Problem:</strong> Without a shared timestamped timeline, Environmental Services (EVS) and Maintenance rely on manual handoffs to know when a room is vacant, causing hours of idle bed time.</li>
      <li><strong>The Solution:</strong> Deploying an automated operational timeline links EVS and Maintenance to immediate nursing discharge events, allowing teams to execute without waiting for a phone call.</li>
      <li><a href="/solutions/discharge-turnover-software" class="font-semibold text-[#3DA882] hover:underline">Learn how ComplyCare's Discharge Turnover Software orchestrates teams</a>.</li>
    </ul>
  </div>

  <h2>Why is EVS always blamed for slow bed turnover?</h2>
  <p><strong>Answer:</strong> EVS is frequently blamed for bed delays because they are the last visible step in the physical turnover process. However, the true delay is often the notification gap between when nursing clears the patient and when EVS is informed the room is available.</p>
  
  <p>A discharge hits the EHR at 11:04 AM. Nursing clears the patient by noon. EVS assumes the room is on tomorrow's deep-cleaning list. Maintenance is still waiting on a paper work order to fix the bed rail. Admissions is currently on the phone promising a 3 PM admit—into a room nobody has officially marked ready in the system.</p>

  <p>This is not a documentation problem yet. It is an <em>operations</em> problem: three teams operating on three separate communication channels with no shared finish line.</p>

  <img src="/blog-images/workflow-checklist.jpg" alt="Workflow checklist for discharge to bed-ready" class="w-full rounded-xl my-8 shadow-[0_8px_24px_rgba(46,64,87,0.08)]" />

  <h2>What does "bed-ready" actually mean in a SNF?</h2>
  <p><strong>Answer:</strong> A bed is only "ready" when Nursing has released it, EVS has completed infection-control cleaning, Maintenance has cleared the physical equipment, and Admissions has digital confirmation to place a patient.</p>

  <p>When those steps live on different dry-erase whiteboards down different hallways, the slowest step dictates your operational velocity. Even worse, nobody's name is on the clock for the entire chain of custody.</p>

  <p>Fixing that starts with sequencing. Instead of EVS checking a static board, a <a href="/solutions/discharge-turnover-software" class="text-[#3DA882] hover:underline">discharge turnover orchestration tool</a> immediately triggers a push notification to the EVS tablet the second the "Discharge" button is tapped by nursing.</p>

  <h2>How can Maintenance speed up the turnover timeline?</h2>
  <p><strong>Answer:</strong> Maintenance speeds up turnover by addressing equipment functionality (like broken cranks and mattress swaps) concurrently with EVS cleaning, rather than waiting until EVS is finished to inspect the room.</p>

  <p>Beds and mechanical lifts frequently fail at the exact moment a patient arrives because preventive work was logged on "someone else's spreadsheet." When recurring maintenance rounds and corrective jobs roll into the same visibility layer as discharge-driven work, the 2 PM admit does not discover a broken crank at 1:55 PM.</p>

  <h2>What is the financial impact of a unified timeline?</h2>
  <p><strong>Answer:</strong> A unified timeline reduces discharge-to-ready turnaround times by up to 42%, returning hours of "sellable" bed time and preventing hospitals from sending high-acuity referrals to competing facilities.</p>

  <p>When leaders look at a unified digital floorplan, they stop asking "who dropped the ball" and start asking "which specific step in room 312 is late <em>right now</em>?" Nurses see when EVS checked in. Admissions sees when the room turns green for placement.</p>

  <div class="my-8 overflow-x-auto">
    <table class="w-full border-collapse rounded-lg border border-[#E4EDF5] text-sm text-left">
      <thead class="bg-[#F2F6FA] text-[#2E4057]">
        <tr>
          <th class="border-b border-[#E4EDF5] px-4 py-3 font-semibold">Phase</th>
          <th class="border-b border-[#E4EDF5] px-4 py-3 font-semibold">Common Bottleneck</th>
          <th class="border-b border-[#E4EDF5] px-4 py-3 font-semibold">Automated Fix</th>
        </tr>
      </thead>
      <tbody class="text-[#4E6478]">
        <tr>
          <td class="border-b border-[#E4EDF5] px-4 py-3">Nursing Release</td>
          <td class="border-b border-[#E4EDF5] px-4 py-3">Patient gone, system not updated.</td>
          <td class="border-b border-[#E4EDF5] px-4 py-3">Mobile tap immediately alerts EVS.</td>
        </tr>
        <tr>
          <td class="border-b border-[#E4EDF5] px-4 py-3">Terminal Cleaning</td>
          <td class="border-b border-[#E4EDF5] px-4 py-3">EVS cleans room out of priority sequence.</td>
          <td class="border-b border-[#E4EDF5] px-4 py-3">Dashboard forces priority queuing by incoming admit time.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2>Practical First Steps to Take This Week</h2>
  <p><strong>Define the chain of custody.</strong> List every step from "discharge order signed" to "admissions successfully placed." Assign one accountable owner per step—do not assign tasks to "the floor."</p>

  <p><strong>Timebox your handoffs.</strong> If EVS cannot start within 30 minutes of a nursing release, build a system to escalate that delay visibly. Silence on the floor is what creates 90-minute gaps.</p>

  <p>For a deeper look at throughput mathematics, revisit our <a href="/blog/hidden-cost-of-manual-bed-tracking" class="text-[#3DA882] hover:underline">analysis of what manual bed tracking costs</a>. Or, ready to act? See how <a href="/solutions/discharge-turnover-software" class="text-[#3DA882] hover:underline">ComplyCare orchestrates discharge operations</a> to get your beds ready faster.</p>
`;
