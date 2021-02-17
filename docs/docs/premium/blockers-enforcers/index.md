# Support Blockers and Enforcers <Badge text="premium" type="premium"/>

Support blockers and enforcers are available if you have an Aura license with Premium features enabled.

 [Support structures](/docs/supports/) are automatically generated by Aura for all overhang surfaces of the part. The surfaces that require support are determined using the 
 [self-support distance](/docs/supports/#self-support-distance) parameter. However, in some cases, it can be useful to force the generation of support structures in some areas or prevent the support structures from appearing in certain zones. Support enforcers and blockers help to achieve this.

## How to create support blocker or enforcer
1. Load the model for support blocker/enforcer.
2. Select the blocker/enforcer model
3. Press the **Set mask** button on the **Models** panel toolbar
4. Click on the main model
5. Expand the mask settings and select the **Support blocker** or **Support enforcer** options in the **Mask type** dropdown list.

![Creating support blocker or enforcer](./media/add_blocker.png)

## Support blockers

The support blocker does not allow the generation of supports in a specified area (Aura will generate no supports for the part surface inside the blocker). 
In the picture below, the support structure is absent under the model's right part because of the support blocker.

![Support blocker model](./media/support_blocker.png =49%x)
![Support blocker result](./media/support_blocker_res.png =49%x)

## Support enforcers

The support enforcer forces the generation of supports in a specified area (Aura will always generate supports for the part surface inside the enforcer). 
As you can see below, Aura generated the support structure in the support enforcer volume, even for surfaces with a small overhang angle. 

![Support enforcer model](./media/support_enforcer.png =49%x)
![Support enforcer result](./media/support_enforcer_res.png =49%x)