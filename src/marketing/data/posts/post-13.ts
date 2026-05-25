export const content = `
  <div class="rounded-xl border border-[#E4EDF5] bg-[#F2F6FA] p-6 mb-8 mt-2">
    <h3 class="font-display font-semibold text-[#2E4057] mb-3">Executive Summary</h3>
    <ul class="list-disc pl-5 space-y-2 text-sm text-[#4E6478]">
      <li><strong>Direct Answer:</strong> Integrating ComplyCare with PointClickCare (PCC) closes the gap between passive medical record storage and active operational accountability.</li>
      <li><strong>The Core Problem:</strong> An EHR is excellent at storing clinical data, but it doesn't force your maintenance team to check the generator, nor does it inherently track the speed of your e-signature admission workflows in real-time.</li>
      <li><strong>The Solution:</strong> ComplyCare acts as your facility's operational engine, handling admissions e-signatures and compliance workflows, while syncing seamlessly back into PCC to maintain a single source of truth.</li>
      <li><a href="/solutions/pointclickcare-esign-admissions" class="font-semibold text-[#3DA882] hover:underline">See how the ComplyCare PointClickCare Integration works</a>.</li>
    </ul>
  </div>

  <h2>Why isn't an EHR enough for SNF compliance?</h2>
  <p><strong>Answer:</strong> An Electronic Health Record (EHR) is fundamentally a system of record, not a system of action. It stores information after it happens, but it struggles to orchestrate physical workflows like room cleaning, maintenance checks, and multi-step paper admissions.</p>

  <p>Many administrators mistakenly assume their EHR will solve their operational chaos. However, when a surveyor asks for proof that the dietary appliances were deep-cleaned every Tuesday for the last six months, the EHR won't have that answer. You're suddenly back to digging through three-ring binders and hoping the logs were signed.</p>

  <h2>What is the difference between a System of Record and a System of Action?</h2>
  <p><strong>Answer:</strong> A system of record (like PointClickCare) is the ultimate database for patient health and billing. A system of action (like ComplyCare) alerts staff when to act, enforces deadlines, and provides real-time status updates across departments.</p>
  
  <p>When you combine them, you get the "Complete Compliance Stack." ComplyCare orchestrates the chaotic, real-world actions—like getting a guarantor to e-sign an admission agreement—and then automatically files the finalized PDF into the correct folder inside PointClickCare.</p>

  <div class="my-8 overflow-x-auto">
    <table class="w-full border-collapse rounded-lg border border-[#E4EDF5] text-sm text-left">
      <thead class="bg-[#F2F6FA] text-[#2E4057]">
        <tr>
          <th class="border-b border-[#E4EDF5] px-4 py-3 font-semibold">Requirement</th>
          <th class="border-b border-[#E4EDF5] px-4 py-3 font-semibold">PointClickCare's Role</th>
          <th class="border-b border-[#E4EDF5] px-4 py-3 font-semibold">ComplyCare's Role</th>
        </tr>
      </thead>
      <tbody class="text-[#4E6478]">
        <tr>
          <td class="border-b border-[#E4EDF5] px-4 py-3">Admissions Signing</td>
          <td class="border-b border-[#E4EDF5] px-4 py-3">Stores the final legal document in the patient chart.</td>
          <td class="border-b border-[#E4EDF5] px-4 py-3">Generates packet, sends secure mobile link, tracks e-signature status.</td>
        </tr>
        <tr>
          <td class="border-b border-[#E4EDF5] px-4 py-3">Census Updates</td>
          <td class="border-b border-[#E4EDF5] px-4 py-3">Maintains official billing and clinical census.</td>
          <td class="border-b border-[#E4EDF5] px-4 py-3">Pulls census live to drive bed-tracking and automated cleaning alerts.</td>
        </tr>
        <tr>
          <td class="border-b border-[#E4EDF5] px-4 py-3">Survey Readiness</td>
          <td class="border-b border-[#E4EDF5] px-4 py-3">Provides clinical charting audits for MDS and care plans.</td>
          <td class="border-b border-[#E4EDF5] px-4 py-3">Provides timestamped proof of physical maintenance, EVS, and signed agreements.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2>How does ComplyCare sync with PointClickCare?</h2>
  <p><strong>Answer:</strong> As an official PointClickCare Marketplace Partner, ComplyCare utilizes bidirectional API syncing. This means when a patient's status changes in PCC, ComplyCare instantly updates across all department dashboards.</p>

  <p>The days of duplicate data entry are over. If admissions adds a new patient to PointClickCare, that patient automatically appears in the ComplyCare <a href="/solutions/discharge-turnover-software" class="text-[#3DA882] hover:underline">bed tracking</a> system. If a family member signs an admission agreement via ComplyCare's secure portal, the signed PDF is automatically pushed directly into the patient's PointClickCare profile.</p>

  <h2>How does this combination improve compliance?</h2>
  <p><strong>Answer:</strong> By using the right tool for the right job. Nursing focuses on care within the EHR, while operations and administration use the compliance engine to ensure nothing slips through the cracks.</p>
`;
